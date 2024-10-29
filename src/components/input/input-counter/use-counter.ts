'use client';
import { useEffect, useState } from 'react';
import { CounterProps } from './types';

const NUMBERS = Array.from({ length: 10 }).map((_, number) => String(number));

export function useCounter(props: CounterProps) {
  const { value = 0, disableNegativeNumbers, onChangeValue, onDecrease, onIncrease } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(() => value);

  const handleDiminuirCounterItem = () => {
    const newValue = counter - 1;
    handleChangeValue(newValue, 'decrease');
  };

  const handleAumentarCounterItem = () => {
    const newValue = counter + 1;
    handleChangeValue(newValue, 'increase');
  };

  const handleKeyboard = (key: string) => {
    const valueStr = String(counter ?? 0);
    let value = 0;

    if (key === 'Backspace') {
      if (valueStr.length > 1) {
        value = Number(valueStr.slice(0, valueStr.length - 1));
      }
      handleChangeValue(value);
    }

    if (key === 'Delete') {
      if (valueStr.length > 1) {
        value = Number(valueStr.slice(1));
      }
      handleChangeValue(value);
    }

    if (key === 'ArrowUp') {
      handleAumentarCounterItem();
    }

    if (key === 'ArrowDown') {
      handleDiminuirCounterItem();
    }

    if (NUMBERS.includes(key)) {
      const newValue = Number(`${counter}${key}`);
      handleChangeValue(newValue);
    }
  };

  const handleChangeValue = (value?: number, op?: 'increase' | 'decrease' | 'no_event') => {
    let newValue = value;
    if (disableNegativeNumbers) {
      newValue = isNaN(value) ? 0 : value < 0 ? 0 : value;
    }

    if (isNaN(value)) {
      newValue = 0;
    }

    setCounter(newValue);

    if (op === 'decrease') {
      onDecrease?.(newValue);
    }

    if (op === 'increase') {
      onIncrease?.(newValue);
    }

    if (op !== 'no_event') {
      onChangeValue?.(newValue);
    }
  };

  useEffect(() => {
    handleChangeValue(value, 'no_event');
  }, [value]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return {
    counter,
    handleDiminuirCounterItem,
    handleAumentarCounterItem,
    handleKeyboard,
    isLoading,
  };
}
