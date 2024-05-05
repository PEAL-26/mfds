import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { InputText } from '../input-text';
import { InputWithLabelProps } from './types';

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>((props, ref) => {
  const { className, label, ...rest } = props;

  const uuid = uuidV4();

  return (
    <div className="flex w-full flex-col gap-2 justify-start">
      <label className="text-base font-bold text-black" htmlFor={uuid}>
        {label}
      </label>
      <InputText id={uuid} className={twMerge(className)} {...rest} ref={ref} />
    </div>
  );
});

export * from './types';
