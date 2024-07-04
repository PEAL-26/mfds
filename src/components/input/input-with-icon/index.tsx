import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { InputText } from '../input-text';
import { InputIcon } from './input-icon';
import { InputWithIconProps } from './types';

export const InputWithIcon = forwardRef<HTMLInputElement, InputWithIconProps>((props, ref) => {
  const { className, icon, ...rest } = props;

  return (
    <div className={twMerge('relative w-full')}>
      {icon && <InputIcon icon={icon} />}
      <InputText
        data-has-icon={!!icon}
        className={twMerge('data-[has-icon=true]:pl-10', className)}
        {...rest}
        ref={ref}
      />
    </div>
  );
});

InputWithIcon.displayName = 'InputWithIcon';

export * from './types';
