import { MouseEvent } from 'react';
import { ImageProps } from '../image';
type CrossOrigin = 'anonymous' | 'use-credentials' | '' | undefined;

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

type UploadFileSelectorType = 'image' | 'file' | 'music' | 'video';

export interface UploadFileSelectorProps<TForm = any>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form' | 'name' | 'accept'> {
  accept?: Accept;
  type?: UploadFileSelectorType;
  extension?: string[];
  className?: string;
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number;
  onErrors?: (errors: ErrorProps[]) => void;
  defaultFiles?: FileCustom[];
  form?: TForm;
  name?: keyof TForm;
  url?: string;
  crossOrigin?: CrossOrigin;
}

export interface UploadFileSelectorEmptyProps {}

export interface PreviewProps extends Omit<ImageProps, 'alt'> {
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
