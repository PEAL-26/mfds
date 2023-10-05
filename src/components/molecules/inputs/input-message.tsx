import { InputMessageProps } from './types';

export function InputMessage(props: InputMessageProps) {
  const { type = 'info', text = '' } = props;

  const className = {
    error: 'text-red-500',
    info: 'text-green-500',
    warn: 'text-orange',
  }[type];

  return <span className={`mt-1 text-xs font-normal ${className}`}>{text}</span>;
}
