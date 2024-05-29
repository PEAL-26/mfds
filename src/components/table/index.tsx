import { Pagination } from '../pagination';
import { TableBody } from './table-body';
import { TableCell } from './table-data-cell';
import { TableEmpty } from './table-empty';
import { TableFoot } from './table-foot';
import { TableHead } from './table-head';
import { TableHeaderCell } from './table-header-cell';
import { TableLoading } from './table-loading';
import { TableRoot } from './table-root';
import { TableRow } from './table-row';

export const Table = {
  Root: TableRoot,
  Head: TableHead,
  Body: TableBody,
  Foot: TableFoot,
  Cell: TableCell,
  Row: TableRow,
  HeaderCell: TableHeaderCell,
  Empty: TableEmpty,
  Loading: TableLoading,
  Pagination,
};

export * from './table-empty';
export * from './types';
