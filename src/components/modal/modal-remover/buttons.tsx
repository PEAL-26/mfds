import { ButtonsProps } from './types';

export function Buttons(props: ButtonsProps) {
  const { onCancel, onConfirm } = props;

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={onCancel}
        className="flex h-10 w-24 items-center justify-center rounded bg-gray-dark text-center text-white hover:bg-gray-dark/90"
      >
        Não
      </button>
      <button
        onClick={onConfirm}
        className="flex h-10 w-24 items-center justify-center rounded bg-red text-center text-white hover:bg-red/90"
      >
        Remover
      </button>
    </div>
  );
}
