'use client';
import { twMerge } from 'tailwind-merge';
import { ModalRootProps } from './types';
import { useModalRoot } from './use-modal-root';

export function ModalRoot(props: ModalRootProps) {
  const { className = '', children, ...rest } = props;
  const { isModalOpen, handleClickBackdropModal, modalRootRef } = useModalRoot(props);

  return (
    <div
      data-modal
      data-open={isModalOpen}
      onClick={handleClickBackdropModal}
      ref={modalRootRef}
      className={twMerge(
        'fixed inset-0 z-[60] max-h-screen items-center justify-center bg-black/40 transition-transform duration-100 ease-in-out data-[open=true]:flex data-[open=false]:hidden',
        className,
      )}
      {...rest}
    >
      <div className="flex h-full flex-col justify-center p-5">{children}</div>
    </div>
  );
}
