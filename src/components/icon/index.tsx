import { twMerge } from 'tailwind-merge';
import { IconProps } from './types';

export function Icon(props: IconProps) {
  const { icon: Icon, className, ...rest } = props;

  return <Icon className={twMerge('', className)} {...rest} />;
}

export * from './types';
