import { TippyProps as TippyJsProps } from '@tippyjs/react';
import { ReactNode } from 'react';

export interface TippyContentProps {
  content?: ReactNode;
  className?: string;
  minWidthDefault?: string | number;
}

export interface TippyProps extends TippyJsProps {
  elements?: ReactNode;
  content: ReactNode;
  minElementWidth?: boolean;
}
