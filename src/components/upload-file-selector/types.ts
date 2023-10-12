import { MouseEvent } from 'react';

export type ErrorProps = {
  code: string;
  message: string;
};

export interface UploadFileSelectorProps {
  type?: 'image' | 'file';
  supportFilesType?: string[];
  className?: string;
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number;
  onErrors?: (errors: ErrorProps[]) => void;
}

export interface UploadFileSelectorEmptyProps {
  type?: 'image' | 'file';
}

export interface PreviewProps {
  files: any[];
  onRemove?(e: MouseEvent<HTMLButtonElement>): void;
}
