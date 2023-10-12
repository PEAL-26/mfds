import { AiFillCaretLeft, AiFillCaretRight } from '@/libs/react-icon';
import { twMerge } from 'tailwind-merge';

import { TablePaginationProps } from '../table/types';
import { NavigationButton } from './navigation-button';
import { NavigationNumber } from './navigation-number';

export function Pagination(props: TablePaginationProps) {
  const { className, currentPage, totalPages, next, preview } = props;

  const previewActive = !!currentPage && currentPage > 1;
  const nextActive = !!currentPage && !!totalPages && currentPage < totalPages;

  return (
    <div className={twMerge('flex gap-6', className)}>
      <NavigationButton
        icon={AiFillCaretLeft}
        active={previewActive}
        onClick={() => preview && preview()}
      />
      <NavigationNumber currentPage={currentPage || 0} totalPages={totalPages || 0} />
      <NavigationButton
        icon={AiFillCaretRight}
        active={nextActive}
        onClick={() => next && next()}
      />
    </div>
  );
}

export * from './types';
