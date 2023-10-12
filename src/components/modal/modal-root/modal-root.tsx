'use client';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ModalRootProps } from './types';

export function ModalRoot(props: ModalRootProps) {
  const { children, className, open, onClose, ...rest } = props;

  const modalRootRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose && onClose(false);
  };

  const handleClickBackdropModal = (e: MouseEvent) => {
    e.preventDefault();

    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) document.body.classList.add('overflow-hidden');
    if (!isModalOpen) document.body.classList.remove('overflow-hidden');
  }, [isModalOpen]);

  useEffect(() => {
    setIsModalOpen(open);
  }, [open]);

  useEffect(() => {
    const actionButtonCancel = modalRootRef.current?.querySelector('[data-modal-cancel]');

    if (actionButtonCancel) {
      actionButtonCancel.addEventListener('click', closeModal);
    }

    return () => {
      if (actionButtonCancel) {
        actionButtonCancel.removeEventListener('click', closeModal);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className="flex h-full flex-col justify-center">{children}</div>
    </div>
  );
}
