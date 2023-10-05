import { HTMLProps } from 'react';

export interface TableRootProps extends HTMLProps<HTMLTableElement> {}
export interface TableHeadProps extends HTMLProps<HTMLTableSectionElement> {}
export interface TableBodyProps extends HTMLProps<HTMLTableSectionElement> {}
export interface TableFooterProps extends HTMLProps<HTMLTableSectionElement> {}
export interface TableCellProps extends HTMLProps<HTMLTableCellElement> {
  autoColSpan?: boolean;
}

export interface TableRowProps extends HTMLProps<HTMLTableRowElement> {
  formatting?: 'default' | 'none';
}

export interface TableHeaderCellProps extends HTMLProps<HTMLTableCellElement> {
  title?: string;
}
export interface TablePaginationProps extends HTMLProps<HTMLDivElement> {
  totalPages?: number;
  currentPage?: number;
  next?(): void;
  preview?(): void;
}
