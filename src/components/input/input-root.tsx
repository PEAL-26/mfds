import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { InputRootProps } from './types';

export const InputRoot = forwardRef<HTMLDivElement, InputRootProps>((props, ref) => {
  const { className = '', children, ...rest } = props;

  return (
    <div ref={ref} className={twMerge('flex flex-col', className)} {...rest}>
      {children}
    </div>
  );
});

InputRoot.displayName = 'InputRoot';
