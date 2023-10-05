import { twMerge } from 'tailwind-merge';

import { ButtonProps } from './types';
import { variants } from './variants';

export function Button(props: ButtonProps) {
  const { children, type = 'button', variant = 'primary', className, ...rest } = props;

  const classNameVariant = variants({ variant });

  return (
    <button type={type} className={twMerge(`text-center ${classNameVariant}`, className)} {...rest}>
      {children}
    </button>
  );
}
