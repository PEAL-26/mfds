import { twMerge } from 'tailwind-merge';

import { TextProps } from './types';
import { textVariants } from './variants';

export function Text(props: TextProps) {
  const { type = 'none', value, children, ...rest } = props;
  const classNames = textVariants({ variant: type });

  return <span className={twMerge(classNames, rest.className)}>{children ? children : value}</span>;
}

export * from './types';
export * from './variants';
