export function getCalcedDate(date: Date, delta: number) {
  const calcedDate = new Date(date);
  calcedDate.setDate(calcedDate.getDate() + delta);
  return calcedDate;
}

export function getCalendarDateList(date: Date) {
  const firstDate = new Date(date.getFullYear(), date.getMonth());
  firstDate.setDate(firstDate.getDate() - firstDate.getDay());

  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  endDate.setDate(endDate.getDate() + 6 - endDate.getDay());

  const result = [];

  for (
    let i = new Date(firstDate);
    i.getTime() <= endDate.getTime();
    i = getCalcedDate(i, 1)
  ) {
    result.push(i);
  }

  return [
    result.slice(0, 7),
    result.slice(7, 14),
    result.slice(14, 21),
    result.slice(21, 28),
    result.slice(28, 35),
    result.slice(35),
  ];
}
