import { ModalRemover } from '../../components/modal';

export function useRemoveItem() {
  const handleRemove = async (fn: () => void) => {
    try {
      const { isConfirmed } = await ModalRemover();
      if (isConfirmed) {
        fn();
      }
    } catch (error) {}
  };

  return { handleRemove };
}
