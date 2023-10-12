import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { LabelProps } from './types';
import { labelVariants } from './variants';

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props: LabelProps, ref) => {
  const { children, variant = 'none', ...rest } = props;
  const classNameVariant = labelVariants({ variant });

  return (
    <label ref={ref} className={twMerge(classNameVariant, rest.className)} {...rest}>
      {children}
    </label>
  );
});
