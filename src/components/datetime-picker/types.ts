import { InputWithIconProps } from '../input';

export interface DateTimePickerProps extends InputWithIconProps {
  error?: string;
  containerClassName?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface DateTimePickerLabelProps extends Omit<DateTimePickerProps, 'className'> {
  error?: string;
  label: string;
  labelClassName?: string;
  containerClassName?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
}
