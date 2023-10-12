import { StylesConfig } from 'react-select';

export const styles: StylesConfig = {
  control: () => ({
    display: 'flex',
    borderWidth: '1px',
    borderRadius: '0.375rem',
    backgroundColor: '#FCFFFF',
    width: '100%',
  }),
  input: () => ({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  }),
  container: (styles) => ({ ...styles, width: '100%' }),
};

export const stylesBadge: StylesConfig = {
  control: () => ({
    display: 'flex',
    borderWidth: '1px',
    backgroundColor: '#FCFFFF',
    borderStartStartRadius: '0px',
    borderEndStartRadius: '0px',
    borderStartEndRadius: '0.375rem',
    borderEndEndRadius: '0.375rem',
    width: '100%',
  }),
  input: () => ({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  }),
  container: (styles) => ({ ...styles, width: '100%' }),
};
