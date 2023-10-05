import { twMerge } from 'tailwind-merge';

import { forwardRef } from 'react';
import { CheckBoxProps } from './types';
import { variants } from './variants';

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>((props: CheckBoxProps, ref) => {
  const { children, variant = 'primary', ...rest } = props;
  const classNameVariant = variants({ variant });

  return <input type="checkbox" {...rest} className={twMerge(classNameVariant, rest.className)} />;
});
