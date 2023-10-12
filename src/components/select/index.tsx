'use client';
import ReactSelect from 'react-select';
import { styles } from './styles-config';
import { SelectProps } from './types';

export function Select(props: SelectProps) {
  const { options, ...rest } = props;

  return <ReactSelect options={options} className="w-full bg-white" styles={styles} {...rest} />;
}

export * from './select-badge';
export * from './types';
