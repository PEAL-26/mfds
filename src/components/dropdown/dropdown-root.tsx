import { Tippy } from '@/libs/tippy';

import { DropdownProps } from './types';
import { getComponents } from './utils';

export function DropdownRoot(props: DropdownProps) {
  const {
    placement = 'bottom-end',
    interactive = true,
    children,
    visible,
    zIndex = 30,
    onClickOutside,
    ...rest
  } = props;

  const { contents, elements } = getComponents(children);

  return (
    <Tippy
      allowHTML
      minElementWidth
      zIndex={zIndex}
      visible={visible}
      content={contents}
      elements={elements}
      placement={placement}
      interactive={interactive}
      onClickOutside={onClickOutside}
      {...rest}
    />
  );
}
