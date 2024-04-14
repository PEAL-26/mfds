import { HTMLProps } from 'react';

export type CheckBoxVariantTypes = 'primary' | 'success' | 'error' | 'none';

export interface CheckBoxProps extends HTMLProps<HTMLInputElement> {
  variant?: CheckBoxVariantTypes;
  onChecked?: (checked: boolean) => void;
}
