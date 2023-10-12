import { HTMLProps } from 'react';

export type TextAreaVariantTypes = 'primary' | 'success' | 'error' | 'disable' | 'none';

export interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  variant: TextAreaVariantTypes;
}

export interface TextAreaLabelProps extends TextAreaProps {
  label: string;
}
