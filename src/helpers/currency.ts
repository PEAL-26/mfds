import { getPropertyValue } from './objects';

export interface CurrencyProps {
  value: number;
  currency?: string;
  locales?: string;
}

export const formatarMoeda = (props: CurrencyProps) => {
  const { value, currency = 'AOA', locales = 'pt-AO' } = props;

  const formattedValue = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return formattedValue.replace('AOA', 'Kz');
};

export const totalizarItens = <T>(itens: T[], campo: string) => {
  return itens.reduce((accumulator, currentValue) => {
    const object = Object(currentValue);
    const property = getPropertyValue(object, campo);

    validateCurrencyProps(property);

    return accumulator + property.value;
  }, 0);
};

export const validateCurrencyProps = (obj: any) => {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Object must be a non-null object');
  }

  if (typeof obj.value !== 'number') {
    throw new Error('value must be a number');
  }

  if (obj.currency !== undefined && typeof obj.currency !== 'string') {
    throw new Error('currency must be a string or undefined');
  }

  if (obj.locales !== undefined && typeof obj.locales !== 'string') {
    throw new Error('locales must be a string or undefined');
  }
};

export function formatInputMoney(input = '000') {
  if (isNaN(Number(input))) return '0,00';

  const value = clearFormat(input);
  const milhas = value.substring(0, value.length - 2);
  const decimal = value.substring(value.length - 2);

  let count = 0;
  let milhasFormatted = '';
  for (let i = milhas.length - 1; i >= 0; i--) {
    count++;

    if (count === 4) {
      milhasFormatted += ' ';
      count = 0;
    }
    milhasFormatted += milhas[i];
  }

  let milhasOrder = '';
  for (let i = milhasFormatted.length - 1; i >= 0; i--) {
    milhasOrder += milhasFormatted[i];
  }

  return `${milhasOrder},${decimal}`;
}

export function moneyToNumber(money: string) {
  if (isNaN(Number(money))) return Number('0');
  return Number(money.replaceAll(' ', '').replace(',', '.'));
}

export function clearFormat(value = '') {
  return `${value.replace(/\D/g, '')}`;
}

export const money = { formatInputMoney, moneyToNumber, clearFormat };
