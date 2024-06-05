'use client';
import { twMerge } from 'tailwind-merge';
import { Dialog, DialogContent } from '../../../components/@radix-ui/dialog';
import { ModalRootProps } from './types';
import { useModalRoot } from './use-modal-root';

export function ModalRoot(props: ModalRootProps) {
  const {
    containerClassName,
    contentClassName,
    enableBackdropClose = true,
    blockClosing = false,
    children,
    ...rest
  } = props;
  const { isModalOpen, modalRootRef, closeModal } = useModalRoot({
    ...props,
    enableBackdropClose,
    blockClosing,
  });

  return (
    <Dialog
      open={isModalOpen}
      modal
      defaultOpen={isModalOpen}
      onOpenChange={(open) => {
        if (!open) closeModal();
      }}
    >
      <DialogContent
        onEscapeKeyDown={(e) => {
          e.preventDefault();
          if (!blockClosing) closeModal();
        }}
        onPointerDownOutside={(e) => {
          if (!enableBackdropClose || blockClosing) e.preventDefault();
        }}
        onInteractOutside={(e) => {
          if (!enableBackdropClose || blockClosing) e.preventDefault();
        }}
        className={twMerge('flex max-h-screen items-center justify-center', containerClassName)}
      >
        <div
          ref={modalRootRef}
          className={twMerge(
            'flex h-full w-full flex-col justify-center overflow-hidden',
            contentClassName,
          )}
          {...rest}
        >
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
