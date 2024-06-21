'use client';
import { forwardRef,useState } from 'react';
import { BiCalendar } from 'react-icons/bi';

import { formatarDataYMD } from '../../helpers/date';

import { Dropdown } from '../dropdown';
import { Input } from '../input';
import { Calendar } from './calendar';
import { ChangeEventType,DateTimePickerProps } from './types';

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>((props, ref) => {
  const {
    value = new Date(),
    defaultValue,
    onChange,
    containerClassName = '',
    startDate,
    endDate,
    error,
    ...rest
  } = props;

  const [currentValue, setCurrentValue] = useState(() => value);
  // const [currentDefaultValue, setCurrentDefaultValue] = useState(() => defaultValue);
  const [visible, setVisible] = useState(false);

  const handleOnChange = (date: Date) => {
    const event = {
      target: { value: date /*formatarDataYMD(date)*/ },
      currentTarget: { value: date /* formatarDataYMD(date)*/ },
    } as ChangeEventType;

    setCurrentValue(date);
    onChange?.(event);
    hide();
  };

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  // useEffect(() => {
  //   const date = value ? new Date(value.toString()) : new Date();
  //   setCurrentValue(date);
  // }, [value]);

// console.log({ currentValue, defaultValue });

  return (
    <>
      <Dropdown.Root
        minElementWidth={false}
        placement="bottom-start"
        visible={visible}
        onClickOutside={hide}
        zIndex={99999999}
        className={containerClassName}
      >
        <Input.Root>
          <Input.WithIcon
            icon={BiCalendar}
            value={formatarDataYMD(currentValue)}
            defaultValue={defaultValue ? formatarDataYMD(defaultValue) : undefined}
            variant="primary"
            className="cursor-pointer"
            {...rest}
            onClick={show}
            readOnly
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
      {error && <span className="mt-1 text-xs font-normal text-red-500">{error}</span>}
    </>
  );
});
