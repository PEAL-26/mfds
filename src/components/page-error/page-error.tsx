import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import { PageErrorProps } from './types';
import { getButtonTitle, getErrors } from './utils';

export function PageError(props: PageErrorProps) {
  const { code = '400', title, description, button, className, onClick } = props;

  const buttonTitle = getButtonTitle(button);
  const error = getErrors({ code, title, description });

  return (
    <div
      className={twMerge(
        'flex min-h-screen w-full flex-col  items-center justify-center gap-5 rounded-md bg-white p-4',
        className,
      )}
    >
      <div className="flex flex-col text-center">
        <span className="text-center text-6xl font-bold text-primary-a lg:text-9xl">Oops!</span>
        <span className="mt-4 text-center text-3xl font-bold text-black">
          {`${code} - ${error.title}`}
        </span>
        <span className="mt-1 max-w-md text-center text-base font-normal text-black">
          {error.description}
        </span>
      </div>

      {buttonTitle && (
        <Button.Root onClick={onClick} variant="secondary">
          {buttonTitle}
        </Button.Root>
      )}
    </div>
  );
}
