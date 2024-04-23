import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { Label } from '../../label';
import { InputText } from '../input-text';
import { InputWithBadgeProps } from './types';

export const InputWithBadge = forwardRef<HTMLInputElement, InputWithBadgeProps>((props, ref) => {
  const {
    className,
    badge,
    badgeAlign = 'left',
    badgeMinWidth = 96,
    containerClassName = '',
    labelClassName = '',
    ...rest
  } = props;

  const uuid = uuidV4();

  return (
    <div className={twMerge('flex', containerClassName)}>
      {badgeAlign === 'left' && (
        <Label
          data-align={badgeAlign}
          style={{ minWidth: badgeMinWidth }}
          variant="input"
          className={twMerge(labelClassName)}
        >
          {badge}
        </Label>
      )}
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
      {badgeAlign === 'right' && (
        <Label
          data-align={badgeAlign}
          style={{ minWidth: badgeMinWidth }}
          variant="input"
          className={twMerge(labelClassName)}
        >
          {badge}
        </Label>
      )}
    </div>
  );
});

export * from './types';
