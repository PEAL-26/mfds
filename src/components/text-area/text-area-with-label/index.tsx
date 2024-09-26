import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { TextArea } from '../text-area';
import { TextAreaWithLabelProps } from '../types';

export const TextAreaWithLabel = forwardRef<HTMLTextAreaElement, TextAreaWithLabelProps>(
  (props, ref) => {
    const { label, className, children, error,required, ...rest } = props;

    const uuid = uuidV4();

    return (
      <div className="flex flex-col  justify-start">
        <label className="mb-2 text-base font-bold text-black" htmlFor={uuid}>
          {label}
           {required && <span className="text-red">{' *'}</span>}
        </label>
        <TextArea id={uuid} className={twMerge(className)} {...rest} ref={ref}>
          {children}
        </TextArea>
        {error && <span className={`mt-1 text-xs font-normal text-red`}>{error}</span>}
      </div>
    );
  },
);
