'use client';
import { useState } from 'react';
import { CounterProps } from './types';

export function useCounter({ value = 0 }: CounterProps) {
  const [counter, setCounter] = useState(value);
  const [event, setEvent] = useState<'keyboard' | 'button' | null>(null);

  const handleDiminuirCounterItem = () => {
    setCounter((prev) => prev - 1);
    setEvent('button');
  };

  const handleAumentarCounterItem = () => {
    setCounter((prev) => prev + 1);
    setEvent('button');
  };

  const handleSetCounterItem = (qtd: number) => {
    if (event === 'keyboard') {
      setCounter(qtd);
    }
  };

  const handleKeyboard = (key: string) => {
    if ((key >= '0' && key <= '9') || key === 'Backspace' || key === 'Delete') {
      setEvent('keyboard');
    }
  };

  return {
    counter,
    handleDiminuirCounterItem,
    handleAumentarCounterItem,
    handleSetCounterItem,
    handleKeyboard,
  };
}
