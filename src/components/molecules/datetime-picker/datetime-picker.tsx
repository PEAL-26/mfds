'use client';
import { useState } from 'react';

import { BiCalendar } from '../../../libs/react-icon';
import { formatarDataYMD } from '../../../helpers/date-format';

import { Input } from '../inputs';
import { Calendar } from './calendar';
import { Dropdown } from '../dropdown';
import { DateTimePickerProps } from './types';

export function DateTimePicker(props: DateTimePickerProps) {
  const [value, setValue] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const onChange = (value: Date) => {
    setValue(value);
    hide();
  };

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <Dropdown.Root placement="bottom-end" visible={visible} onClickOutside={hide} zIndex={30}>
      <Input.Root>
        <Input.Text
          icon={BiCalendar}
          value={formatarDataYMD(value)}
          variant="primary"
          onClick={show}
        />
      </Input.Root>
      <Dropdown.ExpansibleArea>
        <Calendar value={value} onChange={onChange} />
      </Dropdown.ExpansibleArea>
    </Dropdown.Root>
  );
}
