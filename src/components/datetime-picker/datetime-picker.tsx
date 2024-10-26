'use client';
import { forwardRef, useMemo, useState } from 'react';
import { BiCalendar } from 'react-icons/bi';

import { formatarDataYMD } from '../../helpers/date';
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

  const newValue = useMemo(() => value, [value]);
  const [currentValue, setCurrentValue] = useState<Date | undefined>(() => newValue);
  const [visible, setVisible] = useState(false);

  const handleOnChange = (date?: Date) => {
    const event = {
      target: { value: date },
      currentTarget: { value: date },
    } as ChangeEventType;

    setCurrentValue(date);
    onChange?.(event);
    hide();
  };

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <>
      <Popover modal open={visible} onOpenChange={setVisible}>
        <PopoverTrigger asChild>
          <Input.Root>
            <Input.WithIcon
              {...rest}
              icon={BiCalendar}
              value={currentValue ? formatarDataYMD(currentValue) : undefined}
              defaultValue={defaultValue ? formatarDataYMD(defaultValue) : undefined}
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
