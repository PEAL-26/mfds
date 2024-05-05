import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { useFormatMoney, useRestrictedInput } from '../../../hooks/use-restricted-input';
import { InputTextProps } from './types';
import { inputTextVariants } from './variants';

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (props: InputTextProps, ref) => {
    const { className, variant = 'none', type = 'text', value, onChange, ...rest } = props;
    const { onKeydown, formatInputMoney } = useFormatMoney();
    const classNameVariante = inputTextVariants({ variant });
    const isMoney = type === 'money';
    const isRestrict = type === 'number' || type === 'literal';
    const typeRestrict = isRestrict ? type : undefined;
    const defaultValue = isMoney ? formatInputMoney(String(value)) : value;

    const [currentValue, setValue] = useRestrictedInput({
      type: typeRestrict,
      value: defaultValue,
      onChange,
    });

    return (
      <input
        ref={ref}
        type={typeRestrict ? 'text' : type}
        className={twMerge(classNameVariante, className, isMoney && 'text-right')}
        {...rest}
        value={currentValue}
        onChange={setValue}
        onKeyDown={(e) => isMoney && onKeydown(e)}
      />
    );
  },
);
