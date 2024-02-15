'use client';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { AiOutlineMinus, AiOutlinePlus } from '../../../libs/react-icon';
import { Button } from '../../button';
import { InputText } from '../input-text';
import { CounterProps } from './types';
import { useCounter } from './use-counter';

export const InputCounter = forwardRef<HTMLInputElement, CounterProps>((props, ref) => {
  const { className = '', buttonClassName = '' } = props;
  const {
    counter,
    handleKeyboard,
    handleSetCounterItem,
    handleDiminuirCounterItem,
    handleAumentarCounterItem,
  } = useCounter(props);

  return (
    <div className="flex w-24 items-center justify-center gap-1">
      <Button.Root variant="none" onClick={handleDiminuirCounterItem} className={buttonClassName}>
        <Button.Icon icon={AiOutlineMinus} />
      </Button.Root>
      <InputText
        value={counter}
        className={twMerge(
          'h-5 w-10 rounded border border-gray-dark p-0 text-center focus:outline-none',
          className,
        )}
        onChange={(e) => handleSetCounterItem(Number.parseFloat(e.currentTarget.value))}
        onKeyDown={(e) => {
          e.preventDefault();
          handleKeyboard(e.key);
        }}
        ref={ref}
      />
      <Button.Root variant="none" onClick={handleAumentarCounterItem} className={buttonClassName}>
        <Button.Icon icon={AiOutlinePlus} />
      </Button.Root>
    </div>
  );
});
