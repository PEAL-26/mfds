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

export interface TableLoadingProps {
  isLoading?: boolean;
}

export interface TableHeaderCellProps extends HTMLProps<HTMLTableCellElement> {
  title?: string;
}
