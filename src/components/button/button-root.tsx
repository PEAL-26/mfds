import { Button, ButtonProps } from './button';

import { twMerge } from 'tailwind-merge';

export function ButtonRoot(props: ButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <Button className={twMerge('flex items-center gap-2', className)} {...rest}>
      {children}
    </Button>
  );
}
