import { AlertTypes } from '@/components/alert';
import { ReactNode } from 'react';

export interface AlertContextData {
  show(type: AlertTypes, content: ReactNode): void;
}

export interface AlertProviderProps {
  children?: ReactNode;
}
