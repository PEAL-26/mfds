import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { DialogClose } from '../../../components/@radix-ui/dialog';
import { Button, buttonVariants } from '../../button/button';
import { Loading } from '../../loading';
import { ModalActionButtonsProps } from './types';

export const ModalActionButtons = forwardRef<HTMLDivElement, ModalActionButtonsProps>(
  (props, ref) => {
    const {
      cancelText = 'Cancelar',
      okText = 'Ok',
      onCancel,
      onOk,
      isLoading = false,
      containerClassName,
      cancelButtonClassName,
      okButtonClassName,
      ...rest
    } = props;

    return (
      <div
        ref={ref}
        className={twMerge('flex items-center justify-end gap-2', containerClassName)}
        {...rest}
      >
        <Button
          disabled={isLoading}
          type="submit"
          data-modal-action-button-ok
          variant="success"
          onClick={onOk}
          className={twMerge('flex w-20 flex-row items-center gap-2', okButtonClassName)}
        >
          {isLoading && <Loading className="text-white" />}
          {okText}
        </Button>
        <DialogClose
          disabled={isLoading}
          onClick={onCancel}
          className={twMerge(buttonVariants({ variant: 'error' }), 'w-20', cancelButtonClassName)}
        >
          {cancelText}
        </DialogClose>
      </div>
    );
  },
);

ModalActionButtons.displayName = 'ModalActionButtons';
