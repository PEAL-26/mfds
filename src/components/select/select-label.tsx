'use client';
import ReactSelect, { SelectInstance } from 'react-select';
import { v4 as uuidV4 } from 'uuid';

import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles-config';
import { SelectLabelProps } from './types';

export const SelectLabel = forwardRef<SelectInstance, SelectLabelProps>((props, ref) => {
  const { options, label, containerClassName = '', error, ...rest } = props;
  const uuid = uuidV4();

  return (
    <div className={twMerge('flex w-full flex-col', containerClassName)}>
      <label className="mb-2 text-base font-bold text-black" htmlFor={uuid}>
        {label}
      </label>
      <ReactSelect ref={ref} options={options} styles={styles} {...rest} />
      {error && <span className={`mt-1 text-xs font-normal text-red`}>{error}</span>}
    </div>
  );
});
