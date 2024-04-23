import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { InputTextProps } from './types';
import { useInputText } from './use-input-text';
import { inputTextVariants } from './variants';

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (props: InputTextProps, ref) => {
    const { className, variant = 'none', type = 'text', ...rest } = props;
    const classNameVariante = inputTextVariants({ variant });
    const {} = useInputText();

    return (
      <input ref={ref} type={type} className={twMerge(classNameVariante, className)} {...rest} />
    );
  },
);
