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
      inputContainerClassName = '',
      containerClassName = '',
      label,
      errors,
      ...rest
    } = props;

    const uuid = uuidV4();

    return (
      <div className={twMerge('flex w-full flex-col justify-start', containerClassName)}>
        <label
          className={twMerge('mb-2 text-base font-bold text-black', labelClassName)}
          htmlFor={uuid}
        >
          {label}
        </label>
        <DateTimePicker
          id={uuid}
          containerClassName={twMerge('w-full', inputContainerClassName)}
          className={twMerge(inputClassName)}
          {...rest}
          ref={ref}
        />
        {errors && <span className="mt-1 text-xs font-normal text-red-500">{errors}</span>}
      </div>
    );
  },
);
