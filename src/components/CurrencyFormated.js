import React from 'react';
import { formatAsCurrency } from './Currency';

export default function CurrencyFormated({ price }) {
  const newPrice = formatAsCurrency({ value: price });
  return <div>{newPrice}</div>;
}
