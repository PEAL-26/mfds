import { twMerge } from 'tailwind-merge';
import { CollapsibleProps } from './types';

export function CollapsibleRoot(props: CollapsibleProps) {
  const { children, className } = props;

  return (
    <div
      className={twMerge(
        'rounded-md border bg-white shadow transition-all duration-300 ease-in-out',
        className,
      )}
    >
      {children}
    </div>
  );
}
