import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { Label } from '../../atoms/label';
import { TextArea } from '../../atoms/text-area';
import { TextAreaLabelProps } from './types';

export const TextAreaLabel = forwardRef<HTMLTextAreaElement, TextAreaLabelProps>((props, ref) => {
  const { label, className, children, ...rest } = props;

  const uuid = uuidV4();

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-base font-bold text-black" htmlFor={uuid}>
        {label}
      </Label>
      <TextArea id={uuid} className={twMerge(className)} {...rest} ref={ref}>
        {children}
      </TextArea>
    </div>
  );
});
