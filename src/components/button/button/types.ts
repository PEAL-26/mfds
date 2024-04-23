import { ButtonHTMLAttributes } from 'react';

export type ButtonVariantTypes = 'primary' | 'secondary' | 'success' | 'error' | 'outline' | 'none';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantTypes;
}
