'use client';
import ReactSelect from 'react-select';
import { v4 as uuidV4 } from 'uuid';

import { styles } from './styles-config';
import { SelectLabelProps } from './types';

export function SelectLabel(props: SelectLabelProps) {
  const { options, label, ...rest } = props;

  const uuid = uuidV4();

  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-base font-bold text-black" htmlFor={uuid}>
        {label}
      </label>
      <ReactSelect options={options} styles={styles} {...rest} />
    </div>
  );
}
