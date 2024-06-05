import { twMerge } from 'tailwind-merge';
import { ModalFooterProps } from './types';

export function ModalFooter(props: ModalFooterProps) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={twMerge(
        'h-14 w-full  rounded-b bg-gray-200  px-4 py-3 sm:rounded-b-lg',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
