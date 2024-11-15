import {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Value = string | number | readonly string[] | undefined;

interface UseRestrictedInputProps {
  type?: HTMLInputTypeAttribute | 'text' | 'number' | 'literal';
  value?: Value;
  defaultValue?: Value;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export function useRestrictedInput(props: UseRestrictedInputProps) {
  const { value, defaultValue, type, onChange } = props;

  const isNumber = (number: any) => type === 'number' && /^-?\d*\.?\d*$/.test(number);
  const isLiteral = (literal: any) => type === 'literal' && /^[a-zA-Z\s]*$/.test(literal);
  const isNotRestrict = type !== 'number' && type !== 'literal';

  const memoDefaultValue = useMemo(() => {
    if (isNumber(defaultValue)) return defaultValue;
    if (isLiteral(defaultValue)) return defaultValue;
    if (isNotRestrict) return defaultValue;

    return '';
  }, [defaultValue]);

  const [currentValue, setCurrentValue] = useState<any>(() => memoDefaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isNumber(inputValue)) {
      if (inputValue === '-') {
        setCurrentValue('-0');
      } else {
        setCurrentValue(inputValue);
      }
      onChange?.(event);
    }

    if (isLiteral(inputValue)) {
      setCurrentValue(inputValue);
      onChange?.(event);
    }

    if (isNotRestrict) {
      setCurrentValue(inputValue);
      onChange?.(event);
    }
  };

  useEffect(() => {
    if (!isNumber(value) && !isLiteral(value) && !isNotRestrict) return;
    setCurrentValue(value);
  }, [value]);

  return { currentValue, handleChange, defaultValue: memoDefaultValue };
}
