import { twMerge } from 'tailwind-merge';

import { TableFooterProps } from './types';

export function TableFoot(props: TableFooterProps) {
  const { children, className, ...rest } = props;

  return (
    <tfoot
      className={twMerge('w-full rounded-b-md border-t-2 border-gray-200 bg-white p-3', className)}
      {...rest}
    >
      {children}
    </tfoot>
  );
}
