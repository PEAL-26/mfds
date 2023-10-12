import { twMerge } from 'tailwind-merge';

import { forwardRef } from 'react';
import { CheckBoxProps } from './types';
import { checkBoxVariants } from './variants';

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>((props: CheckBoxProps, ref) => {
  const { children, variant = 'primary', ...rest } = props;
  const classNameVariant = checkBoxVariants({ variant });

  return (
    <input
      ref={ref}
      type="checkbox"
      {...rest}
      className={twMerge(classNameVariant, rest.className)}
    />
  );
});

export * from './types';
export * from './variants';
