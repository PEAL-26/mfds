import { HTMLProps } from 'react';

export type TextInputVariant = 'primary' | 'success' | 'error' | 'disable' | 'none';

export interface TextInputProps extends HTMLProps<HTMLInputElement> {
  variant?: TextInputVariant;
}
