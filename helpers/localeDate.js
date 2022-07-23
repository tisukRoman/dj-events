export function localeDate(date, local) {
  return new Date(date).toLocaleDateString(local);
}
