import { HTMLProps } from 'react';

export interface ModalActionButtonsProps extends Omit<HTMLProps<HTMLDivElement>, 'className'> {
  cancelText?: string;
  okText?: string;
  onCancel?(): void;
  onOk?(): void;
  isLoading?: boolean;
  containerClassName?: string;
  cancelButtonClassName?: string;
  okButtonClassName?: string;
}
