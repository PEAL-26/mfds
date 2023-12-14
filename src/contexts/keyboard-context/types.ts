import { ReactNode } from 'react';

export interface KeyboardContextData {
  inputFocus: any;
  onKeyPress: (value: string) => void;
}

export interface KeyboardProviderProps {
  children?: ReactNode;
}
