import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TextAreaProps } from './types';
import { variants } from './variants';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { className, variant = 'none', children, rows = 8, ...rest } = props;

  const classNameVariante = variants({ variant });

  return (
    <textarea ref={ref} className={twMerge(classNameVariante, className)} rows={rows} {...rest}>
      {children}
    </textarea>
  );
});
