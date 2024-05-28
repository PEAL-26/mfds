'use client';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '../,,/../../libs/utils';
import { UploadFileSelectorEmpty } from './empty';
import { Preview } from './preview';
import { UploadFileSelectorProps } from './types';
import { useUploadFileSelector } from './use-upload-file-selector';

export const UploadFileSelector = forwardRef<HTMLInputElement, UploadFileSelectorProps>(
  (props, ref) => {
    const { className, accept, type, name, ...rest } = props;
    const { files, getInputProps, getRootProps, fileRemove, errors, errorMessage } =
      useUploadFileSelector({ ...props, accept, type });

    const isAddedFile = files?.length > 0;

    return (
      <div className="flex h-full w-full flex-col" {...getRootProps()}>
        <div
          className={twMerge(
            'group relative flex h-auto w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-primary-a/50',
            isAddedFile ? 'h-[25rem]' : '',
            className,
          )}
        >
          <input name={String(name)} ref={ref} {...getInputProps()} {...rest} />
          {files.length > 0 ? (
            <Preview files={files} onRemove={fileRemove} />
          ) : (
            <UploadFileSelectorEmpty />
          )}
        </div>
        {errorMessage && (
          <span className={cn('mt-1 text-sm font-medium text-red-600')}>
            {String(errorMessage)}
          </span>
        )}
        {errors.length > 0 &&
          errors.map(({ message }, index) => (
            <span key={index} className="mt-1 text-sm font-medium text-red-600">
              {message}
            </span>
          ))}
      </div>
    );
  },
);

export * from './types';
