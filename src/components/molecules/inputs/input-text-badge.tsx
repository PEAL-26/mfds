import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { Label } from '../../atoms/label';
import { TextInput } from '../../atoms/text-input';

import { InputTextBadgeProps } from './types';

export const InputTextBadge = forwardRef<HTMLInputElement, InputTextBadgeProps>((props, ref) => {
  const { className, badge, badgeAlign = 'left', ...rest } = props;

  const uuid = uuidV4();

  const badgeLabel = (
    <Label
      data-align={badgeAlign}
      className="min-w-[96px] bg-gray-300 p-2 text-center text-sm font-bold data-[align='left']:rounded-s-md data-[align='right']:rounded-e-md"
      htmlFor={uuid}
    >
      {badge}
    </Label>
  );

  return (
    <div className="flex">
      {badgeAlign === 'left' && badgeLabel}
      <TextInput id={uuid} className={twMerge(className, 'rounded-s-none')} {...rest} ref={ref} />
      {badgeAlign === 'right' && badgeLabel}
    </div>
  );
});
