import { SelectProps } from '../select';
import { SelectTypes } from '../types';

export interface SelectBadgeProps<T> extends SelectProps<T> {
  badge: string;
  badgeAlign?: 'left' | 'right';
  error?: string;
  containerClassName?: string;
  type?: SelectTypes;
}
