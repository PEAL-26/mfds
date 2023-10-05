import { twMerge } from 'tailwind-merge';
import { BadgeProps } from './types';

export function Badge(props: BadgeProps) {
  const { children, title, variant, className, ...rest } = props;

  const color = {
    warn: 'bg-orange',
    error: 'bg-red',
    success: 'bg-green',
    info: 'bg-primary-a',
  }[variant];

  return (
    <div
      data-variant={variant}
      className={twMerge(
        'flex  w-24 items-center justify-center rounded-sm py-1 text-xs font-normal text-white',
        color,
        className,
      )}
      {...rest}
    >
      {title || children}
    </div>
  );
}
