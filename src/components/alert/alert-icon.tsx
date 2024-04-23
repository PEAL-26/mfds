import { AiFillMinusCircle } from 'react-icons/ai';
import { BiSolidError } from 'react-icons/bi';
import { BsFillCheckCircleFill, BsInfoCircleFill } from 'react-icons/bs';
import { Icon } from '../icon';

import { AlertIconProps } from './types';

export function AlertIcon(props: AlertIconProps) {
  const { type } = props;

  const alert = {
    warn: { icon: BiSolidError, color: '' },
    error: { icon: AiFillMinusCircle, color: '' },
    success: { icon: BsFillCheckCircleFill, color: '' },
    info: { icon: BsInfoCircleFill, color: '' },
  }[type];

  return <Icon icon={alert.icon} className="mr-3 text-black/60" size={48} />;
}
