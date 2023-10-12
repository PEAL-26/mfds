import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { TextArea, TextAreaWithLabelProps } from '../index';

export const TextAreaWithLabel = forwardRef<HTMLTextAreaElement, TextAreaWithLabelProps>((props, ref) => {
  const { label, className, children, ...rest } = props;

  const uuid = uuidV4();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-bold text-black" htmlFor={uuid}>
        {label}
      </label>
      <TextArea id={uuid} className={twMerge(className)} {...rest} ref={ref}>
        {children}
      </TextArea>
    </div>
  );
});