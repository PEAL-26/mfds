import { twMerge } from 'tailwind-merge';
import { InputRootProps } from './types';

export function InputRoot(props: InputRootProps) {
  const { className = '', children, ...rest } = props;

  return (
    <div className={twMerge('flex flex-col', className)} {...rest}>
      {children}
    </div>
  );
}
