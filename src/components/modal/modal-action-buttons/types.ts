export interface ModalActionButtonsProps {
  cancelText?: string;
  okText?: string;
  onCancel?(): void;
  onOk?(): void;
  isLoading?:boolean
}
