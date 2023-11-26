'use client';
import { AiOutlineMinus, AiOutlinePlus } from '../../../libs/react-icon';
import { Button } from '../../button';
import { InputText } from '../input-text';

import { CounterProps } from './types';
import { useCounter } from './use-counter';

export function InputCounter(props: CounterProps) {
  const {
    counter,
    handleKeyboard,
    handleSetCounterItem,
    handleDiminuirCounterItem,
    handleAumentarCounterItem,
  } = useCounter(props);

  return (
    <div className="flex w-24 items-center justify-center gap-1">
      <Button.Root variant="none" onClick={handleDiminuirCounterItem}>
        <Button.Icon icon={AiOutlineMinus} />
      </Button.Root>
      <InputText
        value={counter}
        className="h-5 w-10 rounded border border-gray-dark p-0 text-center focus:outline-none"
        onChange={(e) => handleSetCounterItem(Number.parseFloat(e.currentTarget.value))}
        onKeyDown={(e) => {
          e.preventDefault();
          handleKeyboard(e.key);
        }}
      />
      <Button.Root variant="none" onClick={handleAumentarCounterItem}>
        <Button.Icon icon={AiOutlinePlus} />
      </Button.Root>
    </div>
  );
}
