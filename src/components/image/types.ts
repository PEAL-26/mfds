import { ImageProps as ImagePropsNext, StaticImageData } from 'next/image';
import { ElementType, SVGProps } from 'react';

export type ImageType = ElementType<SVGProps<HTMLOrSVGElement>> | string;
type SrcType = string  | StaticImageData ;

export interface ImageProps extends Omit<ImagePropsNext, 'src'>  {
  src?: SrcType;
  defaultImage?: ImageType;
  defaultImageSize?: number;
  loadingImage?: ImageType;
  loadingImageSize?: number;
}

export interface DefaultImageLoadingProps extends SVGProps<SVGSVGElement> {
  src?: ImageType;
}

export interface DefaultImageProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: ImageType;
}
