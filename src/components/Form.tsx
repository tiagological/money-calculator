import { SetStateAction, Dispatch, ChangeEvent } from 'react';
import type { DataObj } from '@/app/page';

type FormProps = {
  homeCurrencyError: boolean;
  setHomeCurrency: Dispatch<SetStateAction<null | string>>;
  homeCurrency: null | string;
  homeCurrencies: DataObj['currencyList'];
  dataList: DataObj[];
  onChangeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    prop: 'foreignCurrency' | 'amount',
    name: string
  ) => void;
  currencyList: DataObj['currencyList'];
  removeCurrencyHandler: (e: React.SyntheticEvent, name: string) => void;
  addCurrencyHandler: (e: React.SyntheticEvent, val: number) => void;
  resetHandler: (e: React.SyntheticEvent) => void;
  onSubmitHandler: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  isLoading: boolean;
};

export default function Form({
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
}: FormProps) {
  return (
    <form className="flex flex-col items-stretch sm:items-center">
      <div className="my-2 p-4 rounded-lg shadow-md bg-white">
        <label htmlFor="home_currency" className="block">
          Select your home currency:
        </label>
        {homeCurrencyError && (
          <p className="text-rose-500">Please select a home currency</p>
        )}
        <select
          id="home_currency"
          onChange={(e) => setHomeCurrency(e.target.value)}
          className="border-solid border-2 my-2 p-2 w-full sm:w-min rounded-lg"
          required
          value={homeCurrency || 'default_lg'}
        >
          <option key="default_lg" value="default_lg" hidden>
            Please select your home currency
          </option>
          {homeCurrencies
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ cc, name }) => (
              <option key={cc} value={cc}>
                {`${name} ${cc}`}
              </option>
            ))}
        </select>
      </div>
      {dataList.map((entry) => (
        <div
          key={entry.name}
          className="my-2 p-4 rounded-lg shadow-md bg-white"
        >
          <div className="my-2">
            <label htmlFor={`${entry.name}_foreign_currency`} className="block">
              Select your foreign currency:
            </label>
            {entry.formErrors.foreignCurrency && (
              <p className="text-rose-500">Please select a foreign currency</p>
            )}
            <select
              id={`${entry.name}_foreign_currency`}
              onChange={(e) =>
                onChangeHandler(e, 'foreignCurrency', entry.name)
              }
              className="border-solid border-2 my-2 p-2 rounded-lg w-full sm:w-min"
              required
              value={entry.foreignCurrency || 'default'}
            >
              <option key="default" value="default" hidden>
                Please select your foreign currency
              </option>
              {currencyList
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(({ cc, name }) => (
                  <option key={cc} value={cc}>
                    {`${name} ${cc}`}
                  </option>
                ))}
            </select>
          </div>
          <div className="my-2">
            <label htmlFor={`${entry.name}_foreign_amount`} className="block">
              Enter amount (max length 20):
            </label>
            {entry.formErrors.amount && (
              <p className="text-rose-500">Please enter a valid amount</p>
            )}
            <input
              id={`${entry.name}_foreign_amount`}
              type="text"
              pattern="\d*"
              maxLength={20}
              value={entry.amount}
              onChange={(e) => onChangeHandler(e, 'amount', entry.name)}
              className="border-solid border-2 my-2 p-2 rounded-lg w-full sm:w-min"
              required
            />
          </div>
          {dataList.length !== 1 && (
            <div className="my-2">
              <button
                onClick={(e) => removeCurrencyHandler(e, entry.name)}
                className="sm:self-stretch rounded-2xl px-6 py-1 bg-red-500 hover:bg-red-600 my-2 text-white"
                type="button"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={(e) =>
          addCurrencyHandler(e, dataList[dataList.length - 1].id + 1)
        }
        className="self-stretch rounded-2xl px-6 py-1 bg-sky-400 hover:bg-sky-500 my-2 text-white"
        type="button"
      >
        Add currency
      </button>
      <button
        onClick={(e) => resetHandler(e)}
        className="self-stretch rounded-2xl px-6 py-1 bg-red-500 hover:bg-red-600 my-2 text-white"
        type="button"
      >
        Reset
      </button>
      <button
        onClick={onSubmitHandler}
        className="self-stretch rounded-2xl my-8 px-6 py-1 bg-green-500 hover:bg-green-600 text-white"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
