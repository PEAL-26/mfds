import { TippyContentProps } from './types';

export function TippyContent(props: TippyContentProps) {
  const { content, minWidthDefault } = props;
  const isArray = Array.isArray(content);

  return (
    <div style={{ minWidth: minWidthDefault }}>
      {isArray && content.map((value) => value)}
      {!isArray && content}
    </div>
  );
}
