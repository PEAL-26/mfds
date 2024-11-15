'use client';
import { forwardRef,useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { useFormatMoney,useRestrictedInput } from '../../../hooks/use-restricted-input';
import { InputTextProps } from './types';
import { inputTextVariants } from './variants';



const TYPES_CUSTOM = ['number', 'literal', 'money'];

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (props: InputTextProps, ref) => {
    const {
      className,
      variant = 'none',
      type = 'text',
      value,
      onChange,
      onKeyDown: onKeyDownOriginal,
      ...rest
    } = props;
    const { onKeydown, numberToMoney } = useFormatMoney();
    const classNameVariante = inputTextVariants({ variant });

    const [isMoney, isTypeCustom, newValue, newDefaultValue] = useMemo(() => {
      const isMoney = type === 'money';
      const isTypeCustom = TYPES_CUSTOM.includes(type);
      const newValue = isMoney ? numberToMoney(value ? String(value) : undefined) : value;
      const newDefaultValue = isMoney
        ? numberToMoney(rest?.defaultValue ? String(rest.defaultValue) : undefined)
        : rest?.defaultValue;

      return [isMoney, isTypeCustom, newValue, newDefaultValue] as const;
    }, [type, value, rest.defaultValue]);

    const { currentValue, handleChange, defaultValue } = useRestrictedInput({
      type,
      value: newValue,
      defaultValue: newDefaultValue,
      onChange,
    });

    return (
      <input
        ref={ref}
        {...rest}
        type={isTypeCustom ? 'text' : type}
        className={twMerge(classNameVariante, className, isMoney && 'text-right')}
        defaultValue={newDefaultValue}
        value={currentValue}
        onChange={handleChange}
        onKeyDown={(e) => (isMoney ? onKeydown(e, handleChange) : onKeyDownOriginal?.(e))}
      />
    );
  },
);
