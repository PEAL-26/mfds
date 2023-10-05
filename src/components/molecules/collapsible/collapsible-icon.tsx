import { twMerge } from 'tailwind-merge';
import { CollapsibleIconProps } from './types';

export function CollapsibleIcon(props: CollapsibleIconProps) {
  const { icon: Icon, className, ...rest } = props;

  return <Icon className={twMerge('', className)} {...rest} />;
}
