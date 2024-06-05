import { twMerge } from 'tailwind-merge';
import { ModalBodyProps } from './types';

export function ModalBody(props: ModalBodyProps) {
  const { children, className, enableBackdropClose = true, ...rest } = props;

  return (
    <div className={twMerge('max-h-full w-full overflow-y-auto bg-white p-5', className)} {...rest}>
      {children}
    </div>
  );
}
