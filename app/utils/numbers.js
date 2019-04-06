import currency from 'currency.js';

export const formatCurrency = value => {
  return currency(value, { formatWithSymbol: true }).format()
};

export const extractNumbers = value => {
  if(typeof value != 'string' && isNaN(value)) return value;

  return value.toString().replace( /\D+/g, '');
}