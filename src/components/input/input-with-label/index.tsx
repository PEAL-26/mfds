import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { cn } from '../../../libs/utils';
import { Label } from '../../label';
import { InputText } from '../input-text';
import { InputWithLabelProps } from './types';

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>((props, ref) => {
  const { className, label, error, labelPros, required, ...rest } = props;

  const uuid = uuidV4();

  return (
    <div className="flex w-full flex-col justify-start gap-2">
      <Label
        className={cn('text-base font-bold text-black')}
        htmlFor={uuid}
        {...labelPros}
        ref={undefined}
        required={required}
      >
        {label}
      </Label>
      <InputText id={uuid} className={twMerge(className)} {...rest} ref={ref} />
      {error && <span className={`mt-1 text-xs font-normal text-red`}>{error}</span>}
    </div>
  );
});

export * from './types';
