import { InputWithIconProps } from '../input';

type OmitInputWithIconProps = 'value' | 'onChange';
export interface DateTimePickerProps extends Omit<InputWithIconProps, OmitInputWithIconProps> {
  value?: Date;
  onChange?(date: Date): void;
  containerClassName?: string;
}

export interface DateTimePickerLabelProps extends Omit<DateTimePickerProps, 'className'> {
  label: string;
  labelClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
}
