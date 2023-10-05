import { HTMLProps } from 'react';

export type BadgeVariant = 'warn' | 'error' | 'success' | 'info';

export interface BadgeProps extends HTMLProps<HTMLDivElement> {
  variant: BadgeVariant;
}
