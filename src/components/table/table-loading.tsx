import { Loading } from '../loading';
import { TableCell } from './table-data-cell';
import { TableRow } from './table-row';
import { TableLoadingProps } from './types';

export function TableLoading(props: TableLoadingProps) {
  const { isLoading } = props;

  if (!isLoading) return null;

  return (
    <TableRow formatting="none">
      <TableCell autoColSpan>
        <div className="flex h-60 w-full flex-1 items-center justify-center">
          <Loading width={90} height={90} />
        </div>
      </TableCell>
    </TableRow>
  );
}
