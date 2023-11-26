import { InputCounter } from './input-counter';
import { InputLabel } from './input-label';
import { InputMessage } from './input-message';
import { InputMessageContainer } from './input-message-container';
import { InputRoot } from './input-root';
import { InputText } from './input-text';
import { InputWithBadge } from './input-with-badge';
import { InputWithIcon } from './input-with-icon';
import { InputWithLabel } from './input-with-label';

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Text: InputText,
  WithBadge: InputWithBadge,
  WithIcon: InputWithIcon,
  WithLabel: InputWithLabel,
  Message: InputMessage,
  Messages: InputMessageContainer,
  Counter: InputCounter,
};

export * from './input-counter';
export * from './input-text';
export * from './input-with-badge';
export * from './input-with-icon';
export * from './input-with-label';
export * from './types';
