import { forwardRef } from 'react';

import { twMerge } from 'tailwind-merge';
import { InputLabelProps } from './types';

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>((props, ref) => {
  const { className, text, children,required, ...rest } = props;

  return (
    <label
      className={twMerge('mb-2 text-base font-bold text-black', className)}
      {...rest}
      ref={ref}
    >
      {text || children}
        {required && <span className="text-red">{' *'}</span>}
    </label>
  );
});
