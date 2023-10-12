'use client';
import { forwardRef, useState } from 'react';

import { formatarDataYMD } from '@/helpers/date-format';
import { BiCalendar } from '@/libs/react-icon';

import { Dropdown } from '../dropdown';
import { Input, InputWithIconProps } from '../input';
import { Calendar } from './calendar';

export const DateTimePicker = forwardRef<HTMLInputElement, InputWithIconProps>((props, ref) => {
  const { ...rest } = props;

  const [value, setValue] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const onChange = (value: Date) => {
    setValue(value);
    hide();
  };

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <Dropdown.Root
      minElementWidth={false}
      placement="bottom-start"
      visible={visible}
      onClickOutside={hide}
      zIndex={30}
    >
      <Input.Root>
        <Input.WithIcon
          icon={BiCalendar}
          value={formatarDataYMD(value)}
          variant="primary"
          onClick={show}
          {...rest}
          ref={ref}
        />
      </Input.Root>
      <Dropdown.ExpansibleArea formatting="none">
        <Calendar value={value} onChange={onChange} />
      </Dropdown.ExpansibleArea>
    </Dropdown.Root>
  );
});

export * from './datetime-picker-label';
export * from './types';
