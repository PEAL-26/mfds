const KEYS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'enter', 'backspace', '.'];

export function useKeyboard() {
  const onClick = (key: string | number) => {
    console.log(key, KEYS.includes(key));
  };

  // useEffect(() => {
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     const value = event.key;

  //     // Ignora teclas não numéricas
  //     if (isNaN(parseInt(value, 10))) {
  //       return;
  //     }

  //     onKeyPress(value);
  //   };

  //   window.addEventListener('keydown', handleKeyPress);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, [onKeyPress]);

  return { onClick };
}
