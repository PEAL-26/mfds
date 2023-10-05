import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { Label } from '../../atoms/label';
import { TextInput } from '../../atoms/text-input';

import { InputTextLabelProps } from './types';

export const InputTextLabel = forwardRef<HTMLInputElement, InputTextLabelProps>((props, ref) => {
  const { className, label, ...rest } = props;

  const uuid = uuidV4();

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-base font-bold text-black" htmlFor={uuid}>
        {label}
      </Label>
      <TextInput id={uuid} className={twMerge(className)} {...rest} ref={ref} />
    </div>
  );
});
