import { forwardRef } from 'react';
import { Button, ButtonProps } from './button';

import { twMerge } from 'tailwind-merge';

export const ButtonRoot = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <Button className={twMerge('flex items-center gap-2', className)} {...rest} ref={ref}>
      {children}
    </Button>
  );
});

ButtonRoot.displayName = 'ButtonRoot';
