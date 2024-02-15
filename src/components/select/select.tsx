'use client';
import { forwardRef } from 'react';
import ReactSelect, { SelectInstance } from 'react-select';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles-config';
import { SelectProps } from './types';

export const Select = forwardRef<SelectInstance, SelectProps>((props, ref) => {
  const { options, error, containerClassName = '', ...rest } = props;

  return (
    <div className={twMerge('w-full', containerClassName)}>
      <ReactSelect
        ref={ref}
        options={options}
        className="w-full bg-white"
        styles={styles}
        {...rest}
      />
      {error && <span className={`mt-1 text-xs font-normal text-red`}>{error}</span>}
    </div>
  );
});
