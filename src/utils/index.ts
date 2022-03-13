export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: 'rub',
  style: 'currency',
  currencyDisplay: 'code',
  minimumFractionDigits: 0,
}).format