import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TextInputProps } from './types';
import { variants } from './variants';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const { className, variant = 'none', ...rest } = props;
    const classNameVariante = variants({ variant });

    return (
      <input ref={ref} type={'text'} className={twMerge(classNameVariante, className)} {...rest} />
    );
  },
);
