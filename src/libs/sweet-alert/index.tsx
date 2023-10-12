'use client';
import SweetAlert2 from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'sweetalert2/src/sweetalert2.scss';

import { SweetAlertProps } from './types';

export const SweetAlert = withReactContent(SweetAlert2);

export async function Fire(props: SweetAlertProps) {
  const { ...rest } = props;

  return SweetAlert.fire({
    ...rest,
  });
}

export * from './types';
