import { twMerge } from 'tailwind-merge';
import { GridProps } from './types';

export function Grid(props: GridProps) {
  const { children, cols = 1, rows = 1, className, ...rest } = props;

  const columns = `grid-cols-${cols}`;
  const gridRows = `grid-rows-${rows}`;

  // TODO verificar porquê que o grid-cols-2 não funciona se for passado dinamicamente
  return (
    <div
      className={twMerge(
        `grid grid-cols-2 gap-3 max-sm:grid-cols-1 `,
        columns,
        gridRows,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export * from './types';
