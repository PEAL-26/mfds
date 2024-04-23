import { SelectProps } from '../select';
import { SelectTypes } from '../types';

export interface SelectLabelProps<T> extends SelectProps<T> {
  label: string;
  error?: string;
  containerClassName?: string;
  type?: SelectTypes;
}
