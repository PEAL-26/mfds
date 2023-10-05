'use client';
import TippyJs from '@tippyjs/react';
import { useEffect, useRef, useState } from 'react';
// import 'tippy.js/dist/tippy.css';

import { TippyContent } from './tippy-content';
import { TippyProps } from './types';

export function Tippy(props: TippyProps) {
  const {
    children,
    elements,
    content,
    className,
    trigger = 'click',
    duration = 0,
    placement = 'bottom',
    zIndex,
    minElementWidth = false,
    ...rest
  } = props;

  const elementRef = useRef<HTMLDivElement>(null);

  const [minWidthDefault, setMinWidthDefault] = useState<string | number | undefined>(undefined);

  useEffect(() => {
    if (minElementWidth) setMinWidthDefault(elementRef.current?.clientWidth ?? undefined);
  }, [minElementWidth]);

  return (
    <TippyJs
      content={<TippyContent minWidthDefault={minWidthDefault} content={content} />}
      trigger={trigger}
      duration={duration}
      placement={placement}
      zIndex={zIndex}
      {...rest}
    >
      <div ref={elementRef} className={className}>
        {elements || children}
      </div>
    </TippyJs>
  );
}
