import { HTMLProps } from 'react';

export type LabelVariantTypes = 'success' | 'error' | 'none';

export interface LabelProps extends HTMLProps<HTMLLabelElement> {
  variant?: LabelVariantTypes;
}
