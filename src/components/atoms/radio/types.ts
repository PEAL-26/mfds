import { HTMLProps } from 'react';

export type RadioVariant = 'primary' | 'success' | 'error' | 'none';

export interface RadioProps extends HTMLProps<HTMLInputElement> {
  variant?: RadioVariant;
}
