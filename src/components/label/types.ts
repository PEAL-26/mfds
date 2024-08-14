import { HTMLProps } from 'react';

export type LabelVariantTypes = 'success' | 'error' | 'input' | 'none' | 'badge';

export interface LabelProps extends HTMLProps<HTMLLabelElement> {
  variant?: LabelVariantTypes;
  required?: boolean;
}
