'use client';
import ReactSelect from 'react-select';
import { v4 as uuidV4 } from 'uuid';

import { Label } from '../../atoms/label';
import { stylesBadge } from './styles-config';
import { SelectBadgeProps } from './types';

export function SelectBadge(props: SelectBadgeProps) {
  const { options, badge, badgeAlign = 'left', ...rest } = props;

  const uuid = uuidV4();

  const badgeLabel = (
    <Label
      data-align={badgeAlign}
      className="flex h-[38px] text-sm min-w-[96px] items-center justify-center bg-gray-300 px-2 text-center align-middle font-bold data-[align='left']:rounded-s-md data-[align='right']:rounded-e-md"
      htmlFor={uuid}
    >
      {badge}
    </Label>
  );

  return (
    <div className="flex">
      {badgeAlign === 'left' && badgeLabel}
      <ReactSelect options={options} {...rest} styles={stylesBadge} />
      {badgeAlign === 'right' && badgeLabel}
    </div>
  );
}
