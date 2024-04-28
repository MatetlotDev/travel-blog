export function formatDateToValue(date: string) {
  return date.split('/').reverse().join('-');
}
