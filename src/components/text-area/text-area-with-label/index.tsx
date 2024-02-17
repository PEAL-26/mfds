import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { TextArea } from '../text-area';
import { TextAreaWithLabelProps } from '../types';

export const TextAreaWithLabel = forwardRef<HTMLTextAreaElement, TextAreaWithLabelProps>(
  (props, ref) => {
    const { label, className, children, errors, ...rest } = props;

    const uuid = uuidV4();

    return (
      <div className="flex flex-col">
        <label className="mb-2 text-base font-bold text-black" htmlFor={uuid}>
          {label}
        </label>
        <TextArea id={uuid} className={twMerge(className)} {...rest} ref={ref}>
          {children}
        </TextArea>
        {errors && <span className={`mt-1 text-xs font-normal text-red`}>{errors}</span>}
      </div>
    );
  },
);
