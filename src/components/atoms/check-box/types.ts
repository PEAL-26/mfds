import { HTMLProps } from 'react';

export type CheckBoxVariant = 'primary' | 'success' | 'error' | 'none';

export interface CheckBoxProps extends HTMLProps<HTMLInputElement> {
  variant?: CheckBoxVariant;
}
