import { Button } from '../../../components/atoms/button';

import { twMerge } from 'tailwind-merge';
import { ButtonElementProps } from './types';

export function ButtonRoot(props: ButtonElementProps) {
  const { children, className, variant = 'primary', ...rest } = props;

  return (
    <Button className={twMerge('flex items-center gap-2', className)} variant={variant} {...rest}>
      {children}
    </Button>
  );
}
