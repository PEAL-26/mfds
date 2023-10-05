import { twMerge } from 'tailwind-merge';
import { TableHeadProps } from './types';

export function TableHead(props: TableHeadProps) {
  const { children, className } = props;

  return (
    <thead className={twMerge('w-full rounded-t-md border-b-2 border-gray-200', className)}>
      {children}
    </thead>
  );
}
