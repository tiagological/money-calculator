import getUserLocale from 'get-user-locale';

export const roundNumber = (num: number) => {
  return Math.round((num + Number.EPSILON) * 1000) / 1000;
};

export const formatDate = (date: string) => {
  const locale = getUserLocale();
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  }).format(dateObj);
};
