import { ChangeEvent } from 'react';
import {
  clearFormat,
  formatInputMoney,
  moneyToNumber,
  numberToMoney,
} from '../../helpers/currency';

type ChangeEventType = (event: ChangeEvent<HTMLInputElement>) => void;

export function useFormatMoney() {
  function onKeydown(e: any, changeEvent?: ChangeEventType) {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    let value = input.value;

    const updateValue = (newValue: string) => {
      input.value = newValue;
      const event = { ...e, currentTarget: input, target: input } as ChangeEvent<HTMLInputElement>;
      changeEvent?.(event);
    };

    const formatValue = (val: string) => {
      if (val.length === 2) val = `0${val}`;
      return formatInputMoney(val);
    };

    if (!isNaN(e.key)) {
      if (value === '0,00') {
        updateValue(`0,0${e.key}`);
      } else if (value.startsWith('0,0')) {
        updateValue(`0,${value.slice(3)}${e.key}`);
      } else if (value.startsWith('0,')) {
        const [first, secondary] = [value[2], value[3]];
        updateValue(`${first},${secondary}${e.key}`);
      } else {
        value = clearFormat(`${value}${e.key}`);
        updateValue(formatInputMoney(value));
      }
    }

    if (e.code === 'Backspace') {
      value = clearFormat(value.slice(0, -1));
      updateValue(formatValue(value));
    }
  }

  return { onKeydown, formatInputMoney, clearFormat, moneyToNumber, numberToMoney };
}
