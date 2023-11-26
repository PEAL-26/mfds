import { ElementType,MouseEvent } from 'react';
import { IconBaseProps } from 'react-icons/lib';

export interface NavigationButtonProps {
  icon: ElementType<IconBaseProps>;
  onClick(e: MouseEvent<HTMLButtonElement>): void;
  active: boolean;
}

export interface NavigationNumberProps {
  currentPage: number;
  totalPages: number;
  totalPagesDisplay?: boolean;
}

export interface TablePaginationProps {
  totalPages?: number;
  currentPage?: number;
  className?: string;
  totalPagesDisplay?: boolean;
  next?(): void;
  preview?(): void;
}
