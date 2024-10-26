import { SelectProps as RUISelectProps } from '@radix-ui/react-select';
import { ChangeEvent } from 'react';

export interface SelectProps<T> extends Omit<RUISelectProps, 'value'> {
  id?: string;
  items?: T[];
  defaultItem?: T;
  placeholder?: string;
  fieldValue?: keyof T;
  fieldLabel?: keyof T;
  onSelect?: (item: T) => void;
  onChange?: (event: ChangeEvent<HTMLElement>) => void;
  className?: string;
  contentClassName?: string;
  contentGroupClassName?: string;
  contentItemClassName?: string;
  iconCheck?: boolean;
  selectEmpty?: boolean;
  selectEmptyText?: string;
  value?: any
}
