import { HTMLProps } from 'react';

export type TextAreaVariant = 'primary' | 'success' | 'error' | 'disable' | 'none';

export interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  variant: TextAreaVariant;
}
