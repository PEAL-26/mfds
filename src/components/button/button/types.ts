import { ButtonHTMLAttributes } from 'react';

export type ButtonVariantTypes = 'primary' | 'secondary' | 'success' | 'error' | 'none';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantTypes;
}
