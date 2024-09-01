import prisma from './client';
import { data } from '../src/app/data';
import type { Currency } from '../src/app/data';

async function main() {
  for (const entry of data) {
    const base_currency = entry.base_code;
    const rates = entry.conversion_rates;

    for (const currency in rates) {
      if (base_currency === currency) continue;
      await prisma.rate.create({
        data: {
          base_currency,
          target_currency: currency,
          rate: rates[currency as Currency],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
