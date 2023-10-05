import { InputLabel } from './input-label';
import { InputMessage } from './input-message';
import { InputMessageContainer } from './input-message-container';
import { InputRoot } from './input-root';
import { InputText } from './input-text';

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Text: InputText,
  Message: InputMessage,
  Messages: InputMessageContainer,
};

export default InputRoot;

export * from './input-icon';
export * from './input-label';
export * from './input-message';
export * from './input-message-container';
export * from './input-text';
export * from './input-text-badge';
export * from './input-text-label';
export * from './types';
