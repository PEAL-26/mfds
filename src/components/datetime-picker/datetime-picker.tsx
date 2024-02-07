'use client';
import { forwardRef, useEffect, useState } from 'react';

import { formatarDataYMD } from '../../helpers/date-format';
import { BiCalendar } from '../../libs/react-icon';

import { Dropdown } from '../dropdown';
import { Input } from '../input';
import { Calendar } from './calendar';
import { DateTimePickerProps } from './types';

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>((props, ref) => {
  const { value, onChange, containerClassName = '', ...rest } = props;

  const [currentValue, setCurrentValue] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const handleOnChange = (value: Date) => {
    setCurrentValue(value);
    onChange?.(value);
    hide();
  };

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  useEffect(() => {
    setCurrentValue(value || new Date());
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
          onClick={show}
          {...rest}
          ref={ref}
        />
      </Input.Root>
      <Dropdown.ExpansibleArea formatting="none">
        <Calendar value={currentValue} onChange={handleOnChange} />
      </Dropdown.ExpansibleArea>
    </Dropdown.Root>
  );
});
