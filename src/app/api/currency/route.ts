import { NextResponse } from 'next/server';
import { HOME_CURRENCIES, CURRENCY_CODES } from '@/app/data';
import { ZodError, z } from 'zod';
import prisma from 'prisma/client';

const schema = z.array(
  z.object({
    foreignCurrency: z.enum(CURRENCY_CODES),
    homeCurrency: z.enum(HOME_CURRENCIES),
    amount: z.string(),
  })
);

export async function POST(request: Request) {
  try {
    const data = schema.parse(await request.json());

    const res = await prisma.rate.findMany({
      where: {
        OR: data.map((entry) => ({
          base_currency: entry.homeCurrency,
          target_currency: entry.foreignCurrency,
        })),
      },
      select: {
        rate: true,
        base_currency: true,
        target_currency: true,
      },
    });

    if (!res) {
      return NextResponse.json({ error: 'Rate not found' }, { status: 404 });
    }

    const enrichedData = data.map((entry) => ({
      rate: res.find((item) => item.target_currency === entry.foreignCurrency)
        ?.rate as number,
      amount: entry.amount,
    }));

    const total = enrichedData.reduce((acc, value) => {
      const reverseRate = 1 / value.rate;
      const amount = parseInt(value.amount, 10) * reverseRate;
      return acc + amount;
    }, 0);

    return NextResponse.json({ amount: total });
  } catch (err) {
    console.log(err);
    if (err instanceof ZodError) {
      const errObj = err.format();
      return NextResponse.json({ error: errObj }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
