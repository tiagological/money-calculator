'use client';
import { ChangeEvent, useMemo, useState, useEffect } from 'react';
import { currencies, homeCurrencies } from './data';
import getUserLocale from 'get-user-locale';
import Form from '@/components/Form';

export type DataObj = {
  id: number;
  name: string;
  foreignCurrency: string | null;
  amount: string;
  currencyList: {
    cc: string;
    symbol: string;
    name: string;
  }[];
  formErrors: {
    foreignCurrency?: boolean;
    amount?: boolean;
  };
};

const newEntry = {
  id: 1,
  name: 'entry_1',
  foreignCurrency: null,
  amount: '0',
  currencyList: currencies,
  formErrors: {},
};

const callbackRef = (node: HTMLParagraphElement | null) => {
  if (node) {
    node.scrollIntoView();
  }
};

export default function Home() {
  const [dataList, setDataList] = useState<DataObj[]>([newEntry]);
  const [homeCurrency, setHomeCurrency] = useState<null | string>(null);
  const [homeCurrencyError, setHomeCurrencyError] = useState(false);
  const [res, setRes] = useState<null | string>(null);
  const [err, setErr] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    setFormChanged(true);
  }, [homeCurrency, dataList]);

  const currencyList = useMemo(
    () => currencies.filter((currency) => currency.cc !== homeCurrency),
    [homeCurrency]
  );

  const onSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formChanged) {
      return setErr('Please change the form before submitting again.');
    }
    if (res) {
      setRes(null);
    }

    if (!homeCurrency) {
      setHomeCurrencyError(true);
      return setErr('Please check the form as it has errors.');
    }

    if (homeCurrencyError) {
      setHomeCurrencyError(false);
    }

    let hasErrors = false;
    let dataListCopy = [...dataList];

    for (const entry of dataList) {
      let foreignCurrencyError = false;
      let amountError = false;

      if (!entry.foreignCurrency) foreignCurrencyError = true;
      if (
        parseInt(entry.amount, 10) <= 0 ||
        /\D/.test(entry.amount) ||
        entry.amount === ''
      )
        amountError = true;

      dataListCopy = dataListCopy.map((item) =>
        item.name === entry.name
          ? {
              ...item,
              formErrors: {
                foreignCurrency: foreignCurrencyError,
                amount: amountError,
              },
            }
          : item
      );

      if (foreignCurrencyError || amountError) hasErrors = true;
    }
    setDataList(dataListCopy);

    if (hasErrors) {
      return setErr('Please check the form as it has errors.');
    }
    setErr(null);
    setIsLoading(true);
    try {
      const payload = dataList.map((entry) => ({
        homeCurrency,
        foreignCurrency: entry.foreignCurrency,
        amount: entry.amount,
      }));
      const response = await fetch('/api/currency', {
        body: JSON.stringify(payload),
        method: 'post',
      });

      if (response.ok) {
        const data = (await response.json()) as { amount: number };
        const locale = getUserLocale();
        const formattedAmount = Intl.NumberFormat(locale, {
          style: 'currency',
          currency: homeCurrency,
        }).format(data.amount);
        setRes(formattedAmount);
        setFormChanged(false);
        return setIsLoading(false);
      }

      throw new Error('Something went wrong');
    } catch (err) {
      setRes(null);
      if (err instanceof Error) return setErr(err.message);
      setErr('Something went wrong');
    }
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    prop: 'foreignCurrency' | 'amount',
    name: string
  ) => {
    const obj = dataList.find((entry) => entry.name === name);
    if (!obj) {
      return;
    }

    setDataList(
      dataList.map((entry) =>
        entry.name === name
          ? {
              ...entry,
              [prop]: e.target.value,
            }
          : entry
      )
    );
  };

  const addCurrencyHandler = (e: React.SyntheticEvent, val: number) => {
    e.preventDefault();
    const newItem = { ...newEntry, name: `entry_${val}`, id: val };
    setDataList((prevDataList) => [...prevDataList, newItem]);
  };

  const removeCurrencyHandler = (e: React.SyntheticEvent, name: string) => {
    e.preventDefault();
    setDataList(dataList.filter((entry) => entry.name !== name));
  };

  const resetHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDataList([newEntry]);
    setHomeCurrency(null);
    setErr(null);
  };

  const formProps = {
    homeCurrencyError,
    setHomeCurrency,
    homeCurrency,
    homeCurrencies,
    dataList,
    onChangeHandler,
    currencyList,
    removeCurrencyHandler,
    addCurrencyHandler,
    resetHandler,
    onSubmitHandler,
    isLoading,
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">🌍 Money calculator 💰</h1>
      <p className="my-4 text-center">
        Add any amount of foreign currency and select a home currency to find
        out how much you have.
      </p>
      <Form {...formProps} />
      {res ? (
        <p className="my-2 text-center" ref={callbackRef}>
          Your currency is worth: {res}
        </p>
      ) : null}
      {err ? (
        <p className="my-2 text-rose-500 text-center" ref={callbackRef}>
          {err}
        </p>
      ) : null}
    </div>
  );
}
