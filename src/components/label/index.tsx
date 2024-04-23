import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { LabelProps } from './types';
import { labelVariants } from './variants';

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props: LabelProps, ref) => {
  const { children, variant = 'none', className, ...rest } = props;
  const classNameVariant = labelVariants({ variant });

  return (
    <label ref={ref} className={twMerge(classNameVariant, className)} {...rest}>
      {children}
    </label>
  );
});

export * from './types';
export * from './variants';
