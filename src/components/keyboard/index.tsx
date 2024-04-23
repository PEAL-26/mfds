'use client';
// import { ReturnIcon } from '../../assets/icons';
import { FaBackspace } from 'react-icons/fa';

import { KeyboardButton } from './button';
import { KeyboardProps } from './types';
import { useKeyboard } from './use-keyboard';

export function Keyboard(props: KeyboardProps) {
  const { model = 'default' } = props;
  const { onClick } = useKeyboard();

  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <KeyboardButton
            key={index + 1}
            value={`${index + 1}`}
            onClick={() => onClick(index + 1)}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1">
        {model === 'number' && <KeyboardButton value="." onClick={() => onClick('.')} />}
        <KeyboardButton
          data-model-number={model === 'number'}
          value="0"
          onClick={() => onClick(0)}
          className="data-[model-number=false]:col-span-2 data-[model-number=false]:w-full"
        />
        {model === 'number' ? (
          <KeyboardButton icon={FaBackspace} onClick={() => onClick('backspace')} />
        ) : (
          <></>
          // <KeyboardButton icon={ReturnIcon} onClick={() => onClick('enter')} />
        )}
      </div>
    </div>
  );
}
