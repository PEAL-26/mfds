import { ButtonIconProps } from './types';

export function ButtonIcon(props: ButtonIconProps) {
  const { icon: Icon, size = 20, ...rest } = props;

  return <Icon size={size} {...rest} />;
}
