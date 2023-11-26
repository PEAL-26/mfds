import { NavigationNumberProps } from './types';

export function NavigationNumber(props: NavigationNumberProps) {
  const { totalPagesDisplay = true, currentPage, totalPages, color = '' } = props;
  return (
    <div data-color={color} className="flex text-3xl font-normal data-[color='']:text-neutral-500">
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
