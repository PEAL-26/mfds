import { HTMLAttributes } from 'react';

export type TextType = 'title' | 'subtitle' | 'normal' | 'none';
export type TextVariant = 'title' | 'subtitle' | 'normal' | 'none';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  type?: TextType;
  value?: string;
  variant?: TextVariant;
}
