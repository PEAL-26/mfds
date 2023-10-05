import { AlertType } from '../../components/molecules/alert';
import { ReactNode } from 'react';

export interface AlertContextData {
  show(type: AlertType, content: ReactNode): void;
}

export interface AlertProviderProps {
  children?: ReactNode;
}
