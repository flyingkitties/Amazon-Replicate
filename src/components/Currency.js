export const formatAsCurrency = ({
  language = 'en-GB',
  value = 0,
  currency = 'GBP',
}) => {
  if (!language || !currency) return value;
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency,
  }).format(value);
};
