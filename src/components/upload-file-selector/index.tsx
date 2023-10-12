'use client';
import { twMerge } from 'tailwind-merge';
import { UploadFileSelectorEmpty } from './empty';
import { Preview } from './preview';
import { UploadFileSelectorProps } from './types';
import { useUploadFileSelector } from './use-upload-file-selector';

export function UploadFileSelector(props: UploadFileSelectorProps) {
  const { className } = props;
  const { files, getInputProps, fileRemove } = useUploadFileSelector(props);

  return (
    <div
      className={twMerge(
        'group relative flex w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-primary-a/50',
        className,
      )}
    >
      <input {...getInputProps()} />
      {files.length > 0 ? (
        <Preview files={files} onRemove={fileRemove} />
      ) : (
        <UploadFileSelectorEmpty />
      )}
    </div>
  );
}
