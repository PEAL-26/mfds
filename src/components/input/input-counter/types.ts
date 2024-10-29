export interface CounterProps {
  value?: number;
  interval?: number;
  onDecrease?(value?: number): void;
  onIncrease?(value?: number): void;
  onChangeValue?(value?: number): void;
  buttonClassName?: string;
  className?: string;
  disableNegativeNumbers?: boolean;
}
