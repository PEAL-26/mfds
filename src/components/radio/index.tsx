import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { RadioProps } from './types';
import { radioVariants } from './variants';

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
  const { children, variant = 'primary', type = 'radio', ...rest } = props;
  const classNameVariant = radioVariants({ variant });

  return <input type={type} {...rest} className={twMerge(classNameVariant, rest.className)} />;
});

export * from './types';
export * from './variants';
