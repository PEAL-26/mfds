import { twMerge } from 'tailwind-merge';

import { forwardRef } from 'react';
import { CheckBoxProps } from './types';
import { checkBoxVariants } from './variants';

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>((props: CheckBoxProps, ref) => {
  const { children, variant = 'primary', onChecked, onChange, ...rest } = props;
  const classNameVariant = checkBoxVariants({ variant });

  return (
    <input
      ref={ref}
      type="checkbox"
      onChange={(e) => {
        onChange?.(e);
        onChecked?.(e.currentTarget.checked);
      }}
      {...rest}
      className={twMerge(classNameVariant, rest.className)}
    />
  );
});

export * from './types';
export * from './variants';
