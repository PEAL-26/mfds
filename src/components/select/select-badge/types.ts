import { SelectProps } from '../select';
import { SelectSearchProps } from '../select-search';
import { SelectTypes } from '../types';


export interface SelectBadgeProps<T> extends SelectProps<T>, Omit<SelectSearchProps<T>, 'children'> {
  badge: string;
  badgeAlign?: 'left' | 'right';
  error?: string;
  containerClassName?: string;
  type?: SelectTypes;
}
