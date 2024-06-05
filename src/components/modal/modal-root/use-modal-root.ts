import { useEffect, useRef, useState } from 'react';
import { ModalRootProps } from './types';

export function useModalRoot(props: ModalRootProps) {
  const { open, blockClosing, onClose } = props;

  const modalRootRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    if (blockClosing) return;

    setIsModalOpen(false);
    onClose && onClose(false);
  };

  useEffect(() => {
    setIsModalOpen(open);

    // const actionButtonCancel = document.querySelector('[data-modal-action-button-cancel]');
    // console.log({ actionButtonCancel, modalRootRef: modalRootRef.current });
    // if (actionButtonCancel) {
    //   actionButtonCancel.addEventListener('click', closeModal);
    // }
    // return () => {
    //   if (actionButtonCancel) {
    //     actionButtonCancel.removeEventListener('click', closeModal);
    //   }
    // };
  }, [open]);

  return { isModalOpen, modalRootRef, closeModal };
}
