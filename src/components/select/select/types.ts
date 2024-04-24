import { SelectProps as RUISelectProps } from '@radix-ui/react-select';

export interface SelectProps<T> extends RUISelectProps {
  id?: string;
  items?: T[];
  defaultItem?: T;
  placeholder?: string;
  fieldValue?: keyof T;
  fieldLabel?: keyof T;
  onSelect?: (item: T) => void;
  className?: string;
  classNameContent?: string;
}
