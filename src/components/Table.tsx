import type { ResponseData } from '@/app/page';
import getUserLocale from 'get-user-locale';
import { currencies } from '../app/data';
import { roundNumber } from '@/utils';

export default function Table({ data }: { data: ResponseData[] }) {
  return (
    <table className="table-auto mb-4 rounded-lg shadow-md bg-white">
      <thead>
        <tr>
          <th className="p-4">Currency</th>
          <th className="p-4">Rate</th>
          <th className="p-4">Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => {
          const locale = getUserLocale();
          const formattedAmount = Intl.NumberFormat(locale, {
            style: 'currency',
            currency: entry.homeCurrency as string,
          }).format(entry.amount);
          const currency = currencies.find(
            (currency) => currency.cc === entry.currency
          );
          const isLast = index === data.length - 1;
          const pb = isLast ? 'pb-4' : '';

          return (
            <tr key={entry.id}>
              <td className={`px-4 py-2 ${pb}`}>
                {`${currency?.name ?? ''} ${entry.currency}`}
              </td>
              <td className={`px-4 py-2 ${pb}`}>{roundNumber(entry.rate)}</td>
              <td className={`px-4 py-2 ${pb}`}>{formattedAmount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
