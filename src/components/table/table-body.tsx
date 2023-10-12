import { twMerge } from 'tailwind-merge';
import { TableBodyProps } from './types';

export function TableBody(props: TableBodyProps) {
  const { children, className, ...rest } = props;

  return (
    <tbody className={twMerge('h-full w-full flex-1', className)} {...rest}>
      {children}
    </tbody>
  );
}
