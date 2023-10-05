import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TextInput } from '../../atoms/text-input';
import { InputIcon } from './input-icon';
import { InputTextProps } from './types';

export const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
  const { className, icon, ...rest } = props;

  return (
    <div className={twMerge('relative w-full')}>
      {icon && <InputIcon icon={icon} />}
      <TextInput
        data-has-icon={!!icon}
        className={twMerge('data-[has-icon=true]:pl-10', className)}
        {...rest}
        ref={ref}
      />
    </div>
  );
});
