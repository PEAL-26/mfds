import { Image } from '@/components/pattern/molecules/image';
import { FaTrash } from '@/helpers/icons';
import { PreviewProps } from './types';

export function Preview(props: PreviewProps) {
  const { files, onRemove } = props;
  if (!files || files.length === 0) {
    return null;
  }

  return (
    <>
      <div className="h-full w-full">
        <Image
          alt=""
          src={files[0].preview}
          loading="lazy"
          className="h-full w-full rounded-md object-cover"
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
