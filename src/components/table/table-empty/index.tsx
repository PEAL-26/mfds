import { twMerge } from 'tailwind-merge';

import { TableEmptyProps } from './types';
import { TableEmptyButton } from './button';

export function TableEmpty(props: TableEmptyProps) {
  const { title, description, buttonText = '', icon: Icon, url, className } = props;

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

      {url && <TableEmptyButton title={buttonText} url={url} />}
    </div>
  );
}
