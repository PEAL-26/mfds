import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { InputText } from '../input-text';
import { InputWithBadgeProps } from './types';

export const InputWithBadge = forwardRef<HTMLInputElement, InputWithBadgeProps>((props, ref) => {
  const { className, badge, badgeAlign = 'left', badgeMinWidth = 96, ...rest } = props;

  const uuid = uuidV4();

  const badgeLabel = (
    <label
      data-align={badgeAlign}
      style={{ minWidth: badgeMinWidth }}
      className={`flex items-center justify-center bg-gray-300 p-2 text-center text-sm font-bold data-[align='left']:rounded-s-md data-[align='right']:rounded-e-md`}
      htmlFor={uuid}
    >
      {badge}
    </label>
  );

  return (
    <div className="flex">
      {badgeAlign === 'left' && badgeLabel}
      <InputText
        id={uuid}
        data-align={badgeAlign}
        className={twMerge(
          className,
          "data-[align='left']:rounded-s-none data-[align='right']:rounded-e-none",
        )}
        {...rest}
        ref={ref}
      />
      {badgeAlign === 'right' && badgeLabel}
    </div>
  );
});

export * from './types';
