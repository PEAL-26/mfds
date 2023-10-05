import { Button } from '../../../atoms/button';
import { ModalActionButtonsProps } from './types';

export function ModalActionButtons(props: ModalActionButtonsProps) {
  const { cancelText = 'Cancelar', okText = 'Ok', onCancel, onOk } = props;

  return (
    <div className="flex items-center justify-end gap-2">
      <Button data-modal-ok variant="success" onClick={onOk}>
        {okText}
      </Button>
      <Button data-modal-cancel variant="error" onClick={onCancel}>
        {cancelText}
      </Button>
    </div>
  );
}
