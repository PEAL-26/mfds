import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { InputText } from '../input-text';
import { InputWithBadgeProps } from './types';

export const InputWithBadge = forwardRef<HTMLInputElement, InputWithBadgeProps>((props, ref) => {
  const { className, badge, badgeAlign = 'left', ...rest } = props;

  const uuid = uuidV4();

  const badgeLabel = (
    <label
      data-align={badgeAlign}
      className="min-w-[96px] bg-gray-300 p-2 text-center text-sm font-bold data-[align='left']:rounded-s-md data-[align='right']:rounded-e-md"
      htmlFor={uuid}
    >
      {badge}
    </label>
  );

  return (
    <div className="flex">
      {badgeAlign === 'left' && badgeLabel}
      <InputText id={uuid} className={twMerge(className, 'rounded-s-none')} {...rest} ref={ref} />
      {badgeAlign === 'right' && badgeLabel}
    </div>
  );
});

export * from './types';
