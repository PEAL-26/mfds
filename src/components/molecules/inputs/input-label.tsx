import { forwardRef } from 'react';

import { twMerge } from 'tailwind-merge';
import { Label } from '../../atoms/label';
import { InputLabelProps } from './types';

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>((props, ref) => {
  const { className, text, children, ...rest } = props;

  return (
    <Label className={twMerge('mb-2 text-lg font-bold text-black', className)} {...rest} ref={ref}>
      {text || children}
    </Label>
  );
});
