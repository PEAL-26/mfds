'use client';
import { useCallback, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { AiOutlineClose } from '../../libs/react-icon';
import { AlertIcon } from './alert-icon';
import { AlertProps } from './types';

export function Alert(props: AlertProps) {
  const { children, show = false, type, onHide } = props;
  const [isShow, setIsShow] = useState(false);

  const backgroundColor = {
    warn: 'bg-orange',
    error: 'bg-red',
    success: 'bg-green',
    info: 'bg-primary-a',
  }[type];

  const hide = useCallback(() => {
    setIsShow(false);

    setTimeout(() => {
      onHide && onHide();
    }, 300);
  }, [onHide]);

  useEffect(() => {
    const startTime = (time = 5000) => {
      setTimeout(() => {
        hide();
      }, time);
    };

    if (show) {
      setIsShow(show);
      startTime();
    }
  }, [show, hide]);

  return (
    <div
      data-show={isShow}
      className={twMerge(
        'fixed z-[999999] w-full transition-transform duration-300 ease-in-out data-[show=false]:-translate-y-full data-[show=true]:translate-y-0',
        backgroundColor,
      )}
      role="alert"
    >
      <span className="sr-only">{type}</span>
      <div className="relative flex h-full w-full items-center px-20 py-2">
        <button className="absolute right-4 top-2 rounded p-2 hover:bg-black/40" onClick={hide}>
          <AiOutlineClose size={16} className="text-black/60" />
        </button>
        <AlertIcon type={type} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export * from './alert-icon';
export * from './types';
