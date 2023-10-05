import { twMerge } from 'tailwind-merge';
import { TableRowProps } from './types';

export function TableRow(props: TableRowProps) {
  const { children, className, formatting = 'default', ...rest } = props;

  const classNameDefault = {
    default: 'border-b border-gray-200 hover:bg-gray-200/50',
    none: '',
  }[formatting];

  return (
    <tr className={twMerge(classNameDefault, className)} {...rest}>
      {children}
    </tr>
  );
}
