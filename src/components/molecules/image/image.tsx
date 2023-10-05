'use client';
// import ImageNext from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { DefaultImage } from './default-image';
import { DefaultImageLoading } from './default-image-loading';

import { ImageProps } from './types';

export function Image(props: ImageProps) {
  const { src, defaultImage, defaultImageSize, loadingImage, loadingImageSize, ...rest } = props;

  const imageRef = useRef<HTMLImageElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onLoad = () => {
    setIsLoading(false);
    setIsError(false);
  };

  const onError = () => {
    setIsError(true);
    setIsLoading(false);
    console.error('Erro ao carregar a imagem!');
  };

  const onLoadStart = () => {
    setIsLoading(true);
    setIsError(false);
  };

  useEffect(() => {
    const _imageRef = imageRef.current;

    if (src && typeof src === 'string' && _imageRef) {
      _imageRef.src = src;
      _imageRef.addEventListener('load', onLoad);
      _imageRef.addEventListener('error', onError);
      onLoadStart();
    }

    return () => {
      _imageRef?.removeEventListener('load', onLoad);
      _imageRef?.removeEventListener('error', onError);
    };
  }, [src]);

  if (isLoading) {
    return (
      <DefaultImageLoading src={loadingImage} height={loadingImageSize} width={loadingImageSize} />
    );
  }

  if (isError || !src) {
    return <DefaultImage src={defaultImage} height={defaultImageSize} width={defaultImageSize} />;
  }

  // return <ImageNext ref={imageRef} src={src} {...rest} />;
}
