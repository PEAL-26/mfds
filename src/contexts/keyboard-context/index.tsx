'use client';

import { createContext, useContext, useState } from 'react';

import { KeyboardContextData, KeyboardProviderProps } from './types';

const KeyboardContext = createContext<KeyboardContextData>({} as KeyboardContextData);

export const KeyboardProvider: React.FC<KeyboardProviderProps> = ({ children }) => {
  const [inputFocus, setInputFocus] = useState(null);

  const onKeyPress = (value: string) => {};

  return (
    <KeyboardContext.Provider value={{ inputFocus, onKeyPress }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => {
  const keyboardContext = useContext(KeyboardContext);

  if (!keyboardContext) {
    throw new Error('useKeyboardContext deve ser usado dentro de um KeyboardProvider');
  }

  return keyboardContext;
};
