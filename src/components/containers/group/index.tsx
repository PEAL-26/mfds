import { twMerge } from 'tailwind-merge';
import { GroupProps } from './types';

export function Group(props: GroupProps) {
  const { children, className, type = 'row', ...rest } = props;

  const classNameType = {
    col: 'flex-col',
    row: 'flex-row items-center max-sm:flex-col',
  }[type];

  return (
    <div className={twMerge('flex w-full gap-3', classNameType, className)} {...rest}>
      {children}
    </div>
  );
}

export * from './types';
