import { twMerge } from 'tailwind-merge';

import { forwardRef } from 'react';
import { ButtonProps } from './types';
import { buttonVariants } from './variants';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, type = 'button', variant = 'primary', className, ...rest } = props;

  const classNameVariant = buttonVariants({ variant });

  return (
    <button
      ref={ref}
      type={type}
      className={twMerge(`text-center ${classNameVariant}`, className)}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
