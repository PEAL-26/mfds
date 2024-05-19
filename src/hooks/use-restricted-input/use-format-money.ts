import { clearFormat, formatInputMoney, moneyToNumber } from '../../helpers/currency';

export function useFormatMoney() {
  function onKeydown(e: any) {
    e.preventDefault();

    let input = e.target;
    let value = input.value;

    if (!isNaN(e.key)) {
      if (value === '0,00') {
        input.value = `0,0${e.key}`;
        return;
      }
      if (value.startsWith('0,0')) {
        input.value = `0,${value.substring(3)}${e.key}`;
        return;
      }
      if (value.startsWith('0,')) {
        const first = value.substring(2, 3);
        const secondary = value.substring(3, 4);
        input.value = `${first},${secondary}${e.key}`;
        return;
      }

      value = clearFormat(`${value}${e.key}`);
      input.value = formatInputMoney(value);
    }

    if (e.code === 'Backspace') {
      value = clearFormat(value.substring(0, input.value.length - 1));
      if (value.length === 2) value = `0${value}`;
      input.value = formatInputMoney(value);
    }
  }

  return { onKeydown, formatInputMoney, clearFormat, moneyToNumber };
}
