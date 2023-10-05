import { NavigationNumberProps } from './types';

export function NavigationNumber(props: NavigationNumberProps) {
  const { currentPage, totalPages } = props;
  return (
    <div className="flex text-3xl font-normal text-neutral-500">
      <span>{currentPage}</span>
      <span>/</span>
      <span>{totalPages}</span>
    </div>
  );
}
