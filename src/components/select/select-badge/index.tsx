'use client';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { useEffect, useState } from 'react';
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
    className,
    ...rest
  } = props;
  const [uuid, setUUID] = useState('');

  const borderClassName = {
    left: 'border-l-0 rounded-l-none',
    right: 'border-r-0 rounded-r-none',
  }[badgeAlign];

  useEffect(() => {
    setUUID(uuidV4());
  }, []);

  return (
    <div className={twMerge('flex flex-col', containerClassName)}>
      <div className="flex">
        {badgeAlign === 'left' && (
          <Label variant="badge" data-align={badgeAlign} htmlFor={uuid}>
            {badge}
          </Label>
        )}
        {type === 'default' && (
          <Select {...rest} id={uuid} className={twMerge(borderClassName, className)} />
        )}
        {type === 'searchable' && (
          <SelectSearch
            {...rest}
            id={uuid}
            className={twMerge(borderClassName, className)}
          />
        )}
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



