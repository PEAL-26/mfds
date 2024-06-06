import { twMerge } from 'tailwind-merge';

import { TableEmptyButton } from './button';
import { TableEmptyProps } from './types';

export function TableEmpty(props: TableEmptyProps) {
  const { title, description, buttonText = '', icon: Icon, url, className, onClick } = props;

  return (
    <div
      className={twMerge(
        'flex h-full w-full  flex-col items-center justify-center rounded-md bg-white py-28',
        className,
      )}
    >
      {Icon && <Icon className="h-28 w-40 text-primary-a" />}
      <div className="mb-5 mt-1 flex flex-col text-center  leading-none">
        <span className="text-3xl font-bold text-black">{title}</span>
        {description && (
          <span className="max-w-xs text-center text-base font-normal leading-none text-black">
            {description}
          </span>
        )}
      </div>

      {(url || onClick) && buttonText && (
        <TableEmptyButton title={buttonText} url={url} onClick={onClick} />
      )}
    </div>
  );
}
