import { InputWithIconProps } from '../input';

type OmitInputWithIconProps = 'value' | 'onChange';
export interface DateTimePickerProps extends InputWithIconProps {
  // value?: Date;
  // onChange?(date: Date): void;
  containerClassName?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface DateTimePickerLabelProps extends Omit<DateTimePickerProps, 'className'> {
  errors?: string;
  label: string;
  labelClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
}
