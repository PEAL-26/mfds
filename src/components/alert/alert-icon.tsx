import {
  AiFillMinusCircle,
  BiSolidError,
  BsFillCheckCircleFill,
  BsInfoCircleFill,
} from '../../libs/react-icon';
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

  return <Icon icon={alert.icon} className="text-black/60 mr-3" size={48} />;
}
