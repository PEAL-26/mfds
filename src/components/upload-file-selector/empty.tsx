import { FaRegImage } from 'react-icons/fa';

export function UploadFileSelectorEmpty() {
  return (
    <div className="flex flex-col items-center p-5">
      <FaRegImage size={120} className="cursor-pointer text-primary-a/30" />
      <p className="text-gray text-center text-sm leading-5">
        Arraste e solte o seu arquivo, ou{' '}
        <span className="cursor-pointer font-bold text-primary-a">escolhe um arquivo</span>
        <br />
      </p>
    </div>
  );
}
