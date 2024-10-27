'use client';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { BiCalendar } from 'react-icons/bi';

import { dateIsValid, formatarDataYMD } from '../../helpers/date';
import { cn } from '../../libs/utils';
import { Popover, PopoverContent, PopoverTrigger } from '../@radix-ui/popover';
import { Input } from '../input';

import { Calendar } from './calendar';
import { ChangeEventType, DateTimePickerProps } from './types';

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    containerClassName = '',
    className,
    startDate,
    endDate,
    error,
    placeholder = 'yyyy/mm/dd',
    ...rest
  } = props;

  const [currentValue, setCurrentValue] = useState<Date | undefined>(() => defaultValue);
  const [visible, setVisible] = useState(false);
  const previousValue = useRef(value);

  const handleOnChange = (date?: Date) => {
    const event = {
      target: { value: date },
      currentTarget: { value: date },
    } as ChangeEventType;

    setCurrentValue(date);
    onChange?.(event);
    hide();
  };

  useEffect(() => {
    if (previousValue.current !== value) {
      setCurrentValue(value);
      previousValue.current = value;
    }
  }, [value]);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const dateToString = (date?: Date) => {
    if (date) {
      return dateIsValid(date) ? formatarDataYMD(date) : 'Data Inválida';
    }

    return undefined;
  };

  return (
    <>
      <Popover modal open={visible} onOpenChange={setVisible}>
        <PopoverTrigger asChild>
          <Input.Root>
            <Input.WithIcon
              {...rest}
              icon={BiCalendar}
              value={dateToString(currentValue)}
              defaultValue={dateToString(defaultValue)}
              variant="primary"
              className={cn('cursor-pointer', className)}
              onClick={show}
              placeholder={placeholder}
              readOnly
              ref={ref}
            />
          </Input.Root>
        </PopoverTrigger>
        <PopoverContent className="w-auto border-none p-0" align="start">
          <Calendar
            startDate={startDate}
            endDate={endDate}
            value={currentValue}
            onChange={handleOnChange}
          />
        </PopoverContent>
      </Popover>
      {error && <span className="mt-1 text-xs font-normal text-red-500">{error}</span>}
    </>
  );
});
