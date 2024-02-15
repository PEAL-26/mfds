'use client';
import ReactSelect from 'react-select';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';

import { stylesBadge } from './styles-config';
import { SelectBadgeProps } from './types';

export function SelectBadge(props: SelectBadgeProps) {
  const { options, badge, badgeAlign = 'left', error, containerClassName = '', ...rest } = props;

  const uuid = uuidV4();

  const badgeLabel = (
    <label
      data-align={badgeAlign}
      className="flex h-[38px] min-w-[96px] items-center justify-center bg-gray-300 px-2 text-center align-middle text-sm font-bold data-[align='left']:rounded-s-md data-[align='right']:rounded-e-md"
      htmlFor={uuid}
    >
      {badge}
    </label>
  );

  return (
    <div className={twMerge('flex flex-col', containerClassName)}>
      <div className="flex">
        {badgeAlign === 'left' && badgeLabel}
        <ReactSelect options={options} styles={stylesBadge} {...rest} />
        {badgeAlign === 'right' && badgeLabel}
      </div>
      {error && <span className={`mt-1 text-xs font-normal text-red`}>{error}</span>}
    </div>
  );
}
