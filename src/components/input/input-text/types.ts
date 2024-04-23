import { HTMLProps } from 'react';

export type InputTextVariantTypes = 'primary' | 'success' | 'error' | 'disable' | 'none';
export type InputTextType = 'text' | 'number' | 'literal' | 'money';

export interface InputTextProps extends HTMLProps<HTMLInputElement> {
  type?: InputTextType;
  variant?: InputTextVariantTypes;
}
