import { MouseEvent } from 'react';

export type ErrorProps = {
  code: string;
  message: string;
};

export interface FileCustom extends File {
  preview: string;
}

export interface Accept {
  [key: string]: string[];
}

export interface UploadFileSelectorProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form' | 'name' | 'accept'> {
  accept?: Accept;
  className?: string;
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number;
  onErrors?: (errors: ErrorProps[]) => void;
  defaultFiles?: FileCustom[];
  name?: any;
  form?: any;
}

export interface UploadFileSelectorEmptyProps {}

export interface PreviewProps {
  files: FileCustom[];
  onRemove?(e: MouseEvent<HTMLButtonElement>): void;
}

export const ERRORS = {
  FILE_TOO_LARGE: 'file-too-large',
  FILE_INVALID_TYPE: 'file-invalid-type',
  TOO_MANY_FILES: 'too-many-files',
};

export const ERROR_MESSAGES = {
  [ERRORS.FILE_TOO_LARGE]:
    'O arquivo selecionado excede o limite de tamanho permitido. Selecione um arquivo menor e tente novamente.',
  [ERRORS.FILE_INVALID_TYPE]:
    'O tipo de arquivo selecionado não é suportado. Por favor, selecione um arquivo PNG, JPEG, JPG ou PDF e tente novamente.',
  [ERRORS.TOO_MANY_FILES]:
    'O número máximo de arquivos permitidos é de 3. Remova alguns arquivos e tente novamente.',
};
