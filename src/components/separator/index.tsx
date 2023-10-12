import { SeparatorProps } from './types';

export function Separator(props: SeparatorProps) {
  const { type = 'hr', color = '#C6C6C8', size = 1, className } = props;

  const styles = {
    hr: { height: size, width: '100%' },
    vr: { height: '100%', width: size },
  }[type];

  return <div style={{ ...styles, backgroundColor: color }} className={className} />;
}

export * from './types';
