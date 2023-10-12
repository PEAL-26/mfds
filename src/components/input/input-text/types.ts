import { HTMLProps } from 'react';

export type InputTextVariantTypes = 'primary' | 'success' | 'error' | 'disable' | 'none';

export interface InputTextProps extends HTMLProps<HTMLInputElement> {
  variant?: InputTextVariantTypes;
}
