import { twMerge } from 'tailwind-merge';
import { TableRootProps } from './types';

export function TableRoot(props: TableRootProps) {
  const { children, className, ...rest } = props;

  return (
    <table className={twMerge('w-full rounded-md bg-white', className)} {...rest}>
      {children}
    </table>
  );
}
