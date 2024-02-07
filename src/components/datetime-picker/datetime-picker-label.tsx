import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { DateTimePicker } from './datetime-picker';
import { DateTimePickerLabelProps } from './types';

export const DatetimePickerLabel = forwardRef<HTMLInputElement, DateTimePickerLabelProps>(
  (props, ref) => {
    const {
      labelClassName = '',
      inputClassName = '',
      containerClassName = '',
      label,
      ...rest
    } = props;

    const uuid = uuidV4();

    return (
      <div className={twMerge('flex w-full flex-col gap-2', containerClassName)}>
        <label className={twMerge('text-base font-bold text-black', labelClassName)} htmlFor={uuid}>
          {label}
        </label>
        <DateTimePicker
          id={uuid}
          containerClassName={twMerge('w-full', inputClassName)}
          className={twMerge(inputClassName)}
          {...rest}
          ref={ref}
        />
      </div>
    );
  },
);
