import { InputWithIconProps } from '../input';

export interface DateTimePickerProps extends InputWithIconProps {
  containerClassName?: string;
}

export interface DateTimePickerLabelProps extends Omit<InputWithIconProps, 'className'> {
  label: string;
  labelClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
}
