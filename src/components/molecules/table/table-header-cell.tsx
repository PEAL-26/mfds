import { twMerge } from 'tailwind-merge';
import { TableHeaderCellProps } from './types';

export function TableHeaderCell(props: TableHeaderCellProps) {
  const { title, children, className, ...rest } = props;

  return (
    <th className={twMerge('p-3 text-left text-lg font-bold text-black', className)} {...rest}>
      {title || children}
    </th>
  );
}
