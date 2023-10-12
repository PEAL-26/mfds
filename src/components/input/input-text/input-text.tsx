import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { InputTextProps } from './types';
import { inputTextVariants } from './variants';

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (props: InputTextProps, ref) => {
    const { className, variant = 'none', ...rest } = props;
    const classNameVariante = inputTextVariants({ variant });

    return (
      <input ref={ref} type="text" className={twMerge(classNameVariante, className)} {...rest} />
    );
  },
);
