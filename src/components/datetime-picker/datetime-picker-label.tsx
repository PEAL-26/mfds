import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { DateTimePicker } from './index';
import { DateTimePickerLabelProps } from './types';

export const DatetimePickerLabel = forwardRef<HTMLInputElement, DateTimePickerLabelProps>(
  (props, ref) => {
    const { className, label, ...rest } = props;

    const uuid = uuidV4();

    return (
      <div className="flex w-full flex-col gap-2">
        <label className="text-base font-bold text-black" htmlFor={uuid}>
          {label}
        </label>
        <DateTimePicker id={uuid} className={twMerge(className)} {...rest} ref={ref} />
      </div>
    );
  },
);
