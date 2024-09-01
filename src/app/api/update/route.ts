import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import moize from 'moize';
import type { HomeCurrency, Currency } from '@/app/data';
import prisma from 'prisma/client';
import { HOME_CURRENCIES } from '@/app/data';

const MAX_AGE = 1000 * 60 * 60; // 1 hour

const fetchData = async (
  currency: HomeCurrency
): Promise<{ conversion_rates: Record<Currency, number> }> => {
  try {
    const BASE_URL = process.env.API_URL;
    const response = await fetch(`${BASE_URL}/${currency}`);

    if (response.ok) {
      return (await response.json()) as {
        conversion_rates: Record<Currency, number>;
      };
    }

    console.log('Invalid response received from API: ', response);
    throw new Error('Invalid response received from API in fetchData()');
  } catch (err) {
    throw err;
  }
};

const fetchDataPromise = moize.promise(fetchData, {
  maxAge: MAX_AGE,
  maxSize: 5,
});

const getData = async (currency: HomeCurrency) => {
  try {
    const data = await fetchDataPromise(currency);
    for (const targetCurrency in data.conversion_rates) {
      if (targetCurrency === currency) continue;
      await prisma.rate.update({
        where: {
          base_currency_target_currency: {
            base_currency: currency,
            target_currency: targetCurrency,
          },
        },
        data: {
          rate: data.conversion_rates[targetCurrency as Currency],
          updated_at: new Date().toISOString(),
        },
      });
    }
  } catch (err) {
    throw err;
  }
};

export async function POST() {
  try {
    const authHeader = headers().get('authorization');
    if (authHeader !== (process.env.CRON_SECRET as string)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    HOME_CURRENCIES.forEach((currency) => {
      return getData(currency);
    });

    return NextResponse.json({ message: 'success' });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        error: 'Something went wrong',
      },
      { status: 500 }
    );
  }
}
