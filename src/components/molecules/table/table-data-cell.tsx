'use client';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableCellProps } from './types';

export function TableCell(props: TableCellProps) {
  const { children, className, autoColSpan = false, colSpan, ...rest } = props;

  const tableCellRef = useRef<HTMLTableCellElement>(null);
  const [autoColSpanValue, setAutoColSpanValue] = useState<number | undefined>(0);

  useEffect(() => {
    if (autoColSpan) {
      const table = tableCellRef.current?.closest('table');
      const cols = table?.querySelectorAll('thead th').length || 0;
      setAutoColSpanValue(cols);
    }
  }, [autoColSpan]);

  return (
    <td
      ref={tableCellRef}
      colSpan={colSpan || autoColSpanValue}
      className={twMerge('px-3 py-1', className)}
      {...rest}
    >
      {children}
    </td>
  );
}
