import { MouseEvent, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ErrorProps, UploadFileSelectorProps } from './types';

export function useUploadFileSelector(props: UploadFileSelectorProps) {
  const { multiple = false, maxFiles = 1, maxSize } = props;

  const [files, setFiles] = useState<any[]>([]);
  const [errors, setErrors] = useState<ErrorProps[]>([]);

  const onDrop = useCallback((acceptedFiles: any[], fileRejections: any[]) => {
    acceptedFiles.forEach((file) => {});

    fileRejections.forEach(({ errors }) => {});
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept,
    multiple,
    maxSize,
    maxFiles,
  });

  const fileRemove = (event: MouseEvent<HTMLButtonElement>, indexToRemove: number = 0) => {
    event.stopPropagation();

    const updatedFiles = files.slice();
    updatedFiles.splice(indexToRemove, 1);
    setFiles(updatedFiles);
    setErrors([]);
  };

  return { files, errors, getRootProps, getInputProps, fileRemove };
}
