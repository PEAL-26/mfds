import { ChangeEvent } from 'react';
import { InputWithIconProps } from '../input';

export type ChangeEventType = ChangeEvent<HTMLInputElement> & {
  target?: { value?: Date };
  currentTarget?: { value?: Date };
};

export interface DateTimePickerProps
  extends Omit<InputWithIconProps, 'value' | 'defaultValue' | 'onChange'> {
  error?: string;
  containerClassName?: string;
  startDate?: Date;
  endDate?: Date;
  value?: Date;
  defaultValue?: Date;
  onChange?(date: ChangeEventType): void;
}

export interface DateTimePickerLabelProps extends Omit<DateTimePickerProps, 'className'> {
  error?: string;
  label: string;
  labelClassName?: string;
  containerClassName?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
}
