import { twMerge } from 'tailwind-merge';

import { TextProps } from './types';
import { variants } from './variants';

export function Text(props: TextProps) {
  const { type = 'none', value, children, ...rest } = props;
  const classNames = variants({ variant: type });

  return <span className={twMerge(classNames, rest.className)}>{children ? children : value}</span>;
}
