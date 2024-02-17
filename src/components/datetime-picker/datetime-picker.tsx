'use client';
import { forwardRef, useEffect, useState } from 'react';

import { formatarDataYMD } from '../../helpers/date';
import { BiCalendar } from '../../libs/react-icon';

import { Dropdown } from '../dropdown';
import { Input } from '../input';
import { Calendar } from './calendar';
import { DateTimePickerProps } from './types';

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>((props, ref) => {
  const { value, onChange, containerClassName = '', startDate, endDate, ...rest } = props;

  const [currentValue, setCurrentValue] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const handleOnChange = (value: Date) => {
    const event = {
      target: { value: formatarDataYMD(value) },
    } as React.ChangeEvent<HTMLInputElement>;

    setCurrentValue(value);
    onChange?.(event);
    hide();
  };

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  useEffect(() => {
    const date = value ? new Date(value.toString()) : new Date();
    setCurrentValue(date);
  }, [value]);

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
          value={formatarDataYMD(currentValue)}
          variant="primary"
          {...rest}
          onClick={show}
          ref={ref}
        />
      </Input.Root>
      <Dropdown.ExpansibleArea formatting="none">
        <Calendar
          startDate={startDate}
          endDate={endDate}
          value={currentValue}
          onChange={handleOnChange}
        />
      </Dropdown.ExpansibleArea>
    </Dropdown.Root>
  );
});
