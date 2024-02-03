'use client';
import { forwardRef, useState } from 'react';

import { formatarDataYMD } from '../../helpers/date-format';
import { BiCalendar } from '../../libs/react-icon';

import { Dropdown } from '../dropdown';
import { Input } from '../input';
import { Calendar } from './calendar';
import { DateTimePickerProps } from './types';

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>((props, ref) => {
  const { containerClassName = '', ...rest } = props;

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
      className={containerClassName}
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
