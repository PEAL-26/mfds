'use client';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { Label } from '../../label';
import { Select } from '../select';
import { SelectSearch } from '../select-search';
import { SelectBadgeProps } from './types';

export function SelectBadge<T>(props: SelectBadgeProps<T>) {
  const {
    badge,
    badgeAlign = 'left',
    type = 'default',
    error,
    containerClassName = '',
    ...rest
  } = props;
  const uuid = uuidV4();

  return (
    <div className={twMerge('flex flex-col', containerClassName)}>
      <div className="flex">
        {badgeAlign === 'left' && (
          <Label variant="badge" data-align={badgeAlign} htmlFor={uuid}>
            {badge}
          </Label>
        )}
        {type === 'default' && <Select id={uuid} {...rest} />}
        {type === 'searchable' && <SelectSearch id={uuid} {...rest} />}
        {badgeAlign === 'right' && (
          <Label variant="badge" data-align={badgeAlign} htmlFor={uuid}>
            {badge}
          </Label>
        )}
      </div>
      {error && <span className={`mt-1 text-xs font-normal text-red`}>{error}</span>}
    </div>
  );
}

export * from './types';
