import { InputTextProps } from '../input-text';

export interface InputWithLabelProps extends InputTextProps {
  label: string;
  error?: string;
}
