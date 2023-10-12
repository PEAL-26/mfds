import Link from 'next/link';
import { BreadcrumbProps } from './types';

const PRIMEIRA_POSICAO = 1;
export function Breadcrumb(props: BreadcrumbProps) {
  const { links } = props;

  return (
    <div className="mb-6 flex gap-1 text-xl font-medium text-stone-900">
      {links.map(({ title, url }, index) => {
        const separator = index < links.length - PRIMEIRA_POSICAO ? '/' : null;

        if (url)
          return (
            <>
              <Link key={index} href={url}>
                {title}
              </Link>
              {separator && <span>{separator}</span>}
            </>
          );

        return (
          <span key={index} className="text-gray-dark">
            {title}
          </span>
        );
      })}
    </div>
  );
}

export * from './types';
