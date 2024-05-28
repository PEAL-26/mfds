import { ChangeEvent, MouseEvent, useCallback, useEffect, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { generateFileFromUrl } from '../../helpers';
import { ERROR_MESSAGES, ErrorProps, FileCustom, UploadFileSelectorProps } from './types';

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; //5MB

export function useUploadFileSelector(props?: UploadFileSelectorProps) {
  const {
    multiple = false,
    maxFiles = 1,
    maxSize = MAX_UPLOAD_SIZE,
    type = 'image',
    extension = [],
    accept,
    form,
    name,
    url,
    onChange,
    onErrors,
  } = props || {};

  const [files, setFiles] = useState<FileCustom[]>([]);
  const [errors, setErrors] = useState<ErrorProps[]>([]);

  const onDrop = useCallback((acceptedFiles: any[], fileRejections: FileRejection[]) => {
    setErrors([]);

    fileRejections.forEach(({ errors }) => {
      setErrors(
        errors.map(({ code }: ErrorProps) => {
          return { code, message: ERROR_MESSAGES[code] };
        }),
      );
    });

    onErrors && onErrors(errors);
    const newFiles = createImagePreview(acceptedFiles);
    setFiles(newFiles);
    handleChange(newFiles);
  }, []);

  const handleChange = useCallback(
    (newFiles: FileCustom[]) => {
      const files: FileList = {
        length: newFiles.length,
        item: (i: number) => newFiles[i],
        [Symbol.iterator]: function* () {
          for (let i = 0; i < newFiles.length; i++) {
            yield newFiles[i];
          }
        },
      };

      const event = {
        target: { files },
        currentTarget: { files },
      } as ChangeEvent<HTMLInputElement>;

      if (name) {
        form?.clearErrors(name);
        form?.setValue(name, files.length > 0 ? files : null);
      }

      onChange?.(event);
    },
    [form, name, onChange],
  );

  const createImagePreview = (files: File[]) => {
    if (!files || files.length === 0) return [];

    return files?.map((file) => {
      if (!(file instanceof File)) {
        console.error('Item in files array is not a File', { cause: file });
      }

      return Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
    });
  };

  const fileRemove = (event: MouseEvent<HTMLButtonElement>, indexToRemove: number = 0) => {
    event.stopPropagation();

    const updatedFiles = files.slice();
    updatedFiles.splice(indexToRemove, 1);
    setFiles(updatedFiles);
    handleChange(updatedFiles);
  };

  const getAccept = () => {
    let newAccept = {};
    newAccept[`${type}/*`] = extension;
    return accept || newAccept;
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: getAccept(),
    multiple,
    maxSize,
    maxFiles,
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  useEffect(() => {
    (async () => {
      const file = await generateFileFromUrl(url);
      if (file && file instanceof File) {
        const newFiles = createImagePreview([file]);
        setFiles(newFiles);
      }
    })();
  }, [url]);

  const errorMessage = form?.getFieldState(name)?.error?.message;

  return { files, errors, errorMessage, getRootProps, getInputProps, fileRemove };
}
