import { HTMLProps } from 'react';

export type BadgeVariantTypes = 'warn' | 'error' | 'success' | 'info';

export interface BadgeProps extends HTMLProps<HTMLDivElement> {
  variant: BadgeVariantTypes;
}
