import { SelectProps } from '../select';
import { SelectSearchProps } from '../select-search';
import { SelectTypes } from '../types';

export interface SelectLabelProps<T> extends SelectProps<T>, SelectSearchProps<T> {
  label: string;
  error?: string;
  containerClassName?: string;
  type?: SelectTypes;
    required?: boolean;
}
