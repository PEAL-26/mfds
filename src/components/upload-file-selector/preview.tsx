import { FaTrash } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { Image } from '../image';
import { PreviewProps } from './types';

export function Preview(props: PreviewProps) {
  const { files, onRemove, crossOrigin, className, ...rest } = props;
  if (!files || files.length === 0) {
    return null;
  }

  return (
    <>
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          {...rest}
          crossOrigin={crossOrigin}
          alt=""
          src={files[0].preview}
          loading="lazy"
          className={twMerge('h-full w-full rounded-md object-cover', className)}
          onLoad={() => {
            URL.revokeObjectURL(files[0].preview);
          }}
          fill
        />
      </div>
      <button
        onClick={onRemove}
        className="absolute right-4 top-4 cursor-pointer rounded-full bg-red-600 p-3 text-white hover:bg-red-800 group-hover:visible lg:invisible"
      >
        <FaTrash size={20} />
      </button>
    </>
  );
}
