import { InputWithIconProps } from '../input';

export interface DateTimePickerProps extends InputWithIconProps {
  errors?: string;
  containerClassName?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface DateTimePickerLabelProps extends Omit<DateTimePickerProps, 'className'> {
  errors?: string;
  label: string;
  labelClassName?: string;
  containerClassName?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
}
