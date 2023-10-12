import { ModalActionButtons } from './modal-action-buttons';
import { ModalBody } from './modal-body';
import { ModalFooter } from './modal-footer';
import { ModalHeader } from './modal-header';
import { ModalRoot } from './modal-root';

export const Modal = {
  Root: ModalRoot,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  ActionButtons: ModalActionButtons,
};

export default ModalRoot;
export * from './modal-body';
export * from './modal-footer';
export * from './modal-header';
export * from './modal-remover';
export * from './modal-root';
