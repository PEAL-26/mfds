export interface CounterProps {
  value?: number;
  onDecrease?(): void;
  onIncrease?(): void;
  onChangeValue?(): void;
}
