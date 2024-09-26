'use client';
import { v4 as uuidV4 } from 'uuid';

import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Select } from '../select';
import { SelectSearch } from '../select-search';
import { SelectLabelProps } from './types';

export const SelectLabel = forwardRef<typeof Select, SelectLabelProps<any>>((props, ref) => {
  const { label, containerClassName = '', type = 'default', error,required, ...rest } = props;
  const uuid = uuidV4();

  return (
    <div className={twMerge('flex w-full flex-col  justify-start', containerClassName)}>
      <label className="mb-2 text-base font-bold text-black" htmlFor={uuid}>
        {label}
        {required && <span className="text-red">{' *'}</span>}
      </label>
      {type === 'default' && <Select id={uuid} {...rest} />}
      {type === 'searchable' && <SelectSearch id={uuid} {...rest} />}
      {error && <span className={`mt-1 text-xs font-normal text-red`}>{error}</span>}
    </div>
  );
});
SelectLabel.displayName = 'SelectLabel';

export * from './types';
