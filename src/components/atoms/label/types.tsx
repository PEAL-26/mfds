import { HTMLProps } from 'react';

export type LabelVariant = 'primary' | 'secondary' | 'success' | 'error' | 'none';

export interface LabelProps extends HTMLProps<HTMLLabelElement> {
  variant?: LabelVariant;
}
