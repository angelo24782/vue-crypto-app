export function formatNumber(number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "eur",
    maximumSignificantDigits: 20,
  }).format(number);
}
