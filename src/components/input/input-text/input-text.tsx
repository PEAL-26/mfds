'use client';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { useFormatMoney, useRestrictedInput } from '../../../hooks/use-restricted-input';
import { InputTextProps } from './types';
import { inputTextVariants } from './variants';

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (props: InputTextProps, ref) => {
    const {
      className,
      variant = 'none',
      type = 'text',
      defaultValue,
      value,
      onChange,
      onKeyDown: onKeyDownOriginal,
      ...rest
    } = props;
    const { onKeydown, numberToMoney } = useFormatMoney();
    const classNameVariante = inputTextVariants({ variant });

    const isMoney = type === 'money';
    const isRestrict = type === 'number' || type === 'literal';
    const typeRestrict = isRestrict ? type : undefined;
    const newValue = isMoney ? numberToMoney(value ? String(value) : undefined) : value;

    const [currentValue, handleChange] = useRestrictedInput({
      type: typeRestrict,
      value: newValue,
      onChange,
    });

    return (
      <input
        ref={ref}
        type={typeRestrict ? 'text' : type}
        className={twMerge(classNameVariante, className, isMoney && 'text-right')}
        {...rest}
        defaultValue={
          isMoney ? numberToMoney(defaultValue ? String(defaultValue) : undefined) : defaultValue
        }
        value={currentValue}
        onChange={handleChange}
        onKeyDown={(e) => (isMoney ? onKeydown(e, handleChange) : onKeyDownOriginal?.(e))}
      />
    );
  },
);
