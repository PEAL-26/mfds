import { Button } from '../../button/button';
import { ModalActionButtonsProps } from './types';

export function ModalActionButtons(props: ModalActionButtonsProps) {
  const { cancelText = 'Cancelar', okText = 'Ok', onCancel, onOk, isLoading = false } = props;

  return (
    <div className="flex items-center justify-end gap-2">
      <Button disabled={isLoading} type="submit" data-modal-ok variant="success" onClick={onOk}>
        {okText}
      </Button>
      <Button
        disabled={isLoading}
        type="button"
        data-modal-cancel
        variant="error"
        onClick={onCancel}
      >
        {cancelText}
      </Button>
    </div>
  );
}
