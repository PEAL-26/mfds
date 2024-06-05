import { twMerge } from 'tailwind-merge';
import { ModalHeaderProps } from './types';

export function ModalHeader(props: ModalHeaderProps) {
  const { title, className, titleClassName, children, ...rest } = props;

  return (
    <div
      className={twMerge('w-full rounded-t bg-gray-200 p-3 sm:rounded-t-lg', className)}
      {...rest}
    >
      {title && (
        <span className={twMerge('text-xl font-bold text-black', titleClassName)}>{title}</span>
      )}
      {children}
    </div>
  );
}
