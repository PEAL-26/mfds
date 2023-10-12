import { HTMLAttributes } from 'react';

export type TextTypes = 'title' | 'subtitle' | 'normal' | 'none';
export type TextVariantTypes = TextTypes;

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  type?: TextTypes;
  value?: string;
  variant?: TextVariantTypes;
}
