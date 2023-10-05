import { twMerge } from 'tailwind-merge';

import { forwardRef } from 'react';
import { RadioProps } from './types';
import { variants } from './variants';

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
  const { children, variant = 'primary', ...rest } = props;
  const classNameVariant = variants({ variant });

  return <input type="radio" {...rest} className={twMerge(classNameVariant, rest.className)} />;
});
