import { ReactNode } from 'react';

export type AlertType = 'warn' | 'error' | 'success' | 'info';

export interface AlertProps {
  children: ReactNode;
  show?: boolean;
  type: AlertType;
  onHide?(): void;
}

export interface AlertIconProps {
  type: AlertType;
}
