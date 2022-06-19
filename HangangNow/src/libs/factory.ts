export function formatDate(date: Date, format?: string) {
  let result = format ?? 'YYYY-MM-DD HH:mm:ss';

  result = result.replace('YYYY', date.getFullYear() + '');

  result = result.replace('YY', (date.getFullYear() % 100) + '');

  result = result.replace('MM', date.getMonth() + 1 + '');

  result = result.replace('DD', date.getDate() + '');
  result = result.replace('dd', date.getDate() + '');

  result = result.replace('HH', date.getHours() + '');
  result = result.replace('hh', date.getHours() + '');

  result = result.replace('mm', date.getMinutes() + '');

  result = result.replace('SS', date.getSeconds() + '');
  result = result.replace('ss', date.getSeconds() + '');

  return result;
}
