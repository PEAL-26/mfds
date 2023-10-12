import { SweetAlert } from '@/libs/sweet-alert';
import { Buttons } from './buttons';

export function ModalRemover() {
  return SweetAlert.fire({
    icon: 'error',
    titleText: 'Tem certeza?',
    text: 'Você realmente deseja remover esse(s) registo(s)? Este processo não pode ser desfeito.',
    showConfirmButton: false,
    showCancelButton: false,

    footer: <Buttons onCancel={SweetAlert.close} onConfirm={SweetAlert.clickConfirm} />,

    reverseButtons: true,
  });
}

export * from './types';
