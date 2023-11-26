import { NavigationNumberProps } from './types';

export function NavigationNumber(props: NavigationNumberProps) {
  const { totalPagesDisplay = true, currentPage, totalPages } = props;
  return (
    <div className="flex text-3xl font-normal text-neutral-500">
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
