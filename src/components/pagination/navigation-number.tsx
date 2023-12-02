import { twMerge } from 'tailwind-merge';
import { NavigationNumberProps } from './types';

export function NavigationNumber(props: NavigationNumberProps) {
  const { totalPagesDisplay = true, currentPage, totalPages, color } = props;

  return (
    <div
      data-color={!!color}
      className={twMerge('flex text-3xl font-normal data-[color=false]:text-neutral-500')}
      style={{ color }}
    >
      <span>{currentPage}</span>
      {totalPagesDisplay && (
        <>
          <span>/</span>
          <span>{totalPages}</span>
        </>
      )}
    </div>
  );
}
