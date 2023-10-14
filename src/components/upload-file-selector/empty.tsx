import { FaRegImage } from '../../libs/react-icon';
import { UploadFileSelectorEmptyProps } from './types';

export function UploadFileSelectorEmpty(props: UploadFileSelectorEmptyProps) {
  const { type } = props;
  const label = type === 'image' ? 'a imagem' : 'o ficheiro';

  const labelInf =
    type === 'image'
      ? 'Arraste e solte sua imagem aqui, ou '
      : 'Arraste e solte o seu ficheiro aqui, ou ';

  return (
    <div className="flex flex-col items-center p-5">
      <FaRegImage size={120} className="cursor-pointer text-primary-a/30" />
      <p className="text-gray text-center text-base leading-5">
        {labelInf}
        <span className="cursor-pointer font-bold text-primary-a">{`escolhe ${label}`}</span>
        <br />
        <span className="text-xs">
          Suportados:
          {/* {supportFilesType?.map(
            (item, index) => ` ${item + (index < supportFilesType.length - 1 ? ', ' : '')}`,
          )} */}
        </span>
      </p>
    </div>
  );
}
