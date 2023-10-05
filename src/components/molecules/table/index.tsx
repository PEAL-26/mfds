import { TableBody } from './table-body';
import { TableCell } from './table-data-cell';
import { TableFoot } from './table-foot';
import { TableHead } from './table-head';
import { TableHeaderCell } from './table-header-cell';
import { TablePagination } from './table-pagination';
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
  Pagination: TablePagination,
};

export * from './types';
