import { twMerge } from 'tailwind-merge';

import { forwardRef } from 'react';
import { LabelProps } from './types';
import { variants } from './variants';

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props: LabelProps, ref) => {
  const { children, variant = 'none', ...rest } = props;
  const classNameVariant = variants({ variant });

  return (
    <label ref={ref} className={twMerge(classNameVariant, rest.className)} {...rest}>
      {children}
    </label>
  );
});
