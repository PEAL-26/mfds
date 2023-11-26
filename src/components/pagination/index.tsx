import { twMerge } from 'tailwind-merge';
import { AiFillCaretLeft,AiFillCaretRight } from '../../libs/react-icon';

import { NavigationButton } from './navigation-button';
import { NavigationNumber } from './navigation-number';
import { TablePaginationProps } from './types';

export function Pagination(props: TablePaginationProps) {
  const { className, currentPage, totalPages, totalPagesDisplay,color, next, preview  } = props;

  const previewActive = !!currentPage && currentPage > 1;
  const nextActive = !!currentPage && !!totalPages && currentPage < totalPages;

  return (
    <div className={twMerge('flex gap-6', className)}>
      <NavigationButton
        color={color}
        icon={AiFillCaretLeft}
        active={previewActive}
        onClick={() => preview && preview()}
      />
      <NavigationNumber
        color={color}
        currentPage={currentPage || 0}
        totalPages={totalPages || 0}
        totalPagesDisplay={totalPagesDisplay}
      />
      <NavigationButton
        color={color}
        icon={AiFillCaretRight}
        active={nextActive}
        onClick={() => next && next()}
      />
    </div>
  );
}

export * from './types';
