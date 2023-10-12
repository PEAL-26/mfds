import { HTMLProps } from 'react';

export type RadioVariantTypes = 'primary' | 'success' | 'error' | 'none';

export interface RadioProps extends HTMLProps<HTMLInputElement> {
  type?: 'radio';
  variant?: RadioVariantTypes;
}
