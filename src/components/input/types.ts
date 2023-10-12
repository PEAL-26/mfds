import { HTMLProps, ReactNode } from 'react';

export interface InputRootProps {
  children?: ReactNode;
  className?: string;
}

export interface InputLabelProps extends HTMLProps<HTMLLabelElement> {
  text: string;
}

export interface InputMessageContainerProps extends HTMLProps<HTMLDivElement> {}

export type InputMessageTypes = 'error' | 'info' | 'warn';

export interface InputMessageProps {
  type?: InputMessageTypes;
  text?: string;
}
