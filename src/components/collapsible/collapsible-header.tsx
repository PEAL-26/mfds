import { twMerge } from 'tailwind-merge';
import { CollapsibleHeaderContainer } from './collapsible-header-container';
import { CollapsibleHeaderProps } from './types';

export function CollapsibleHeader(props: CollapsibleHeaderProps) {
  const {
    children,
    title,
    className = '',
    classNameIcon = '',
    classNameContainer = '',
    showArrowIcon = true,
    onClick,
  } = props;

  return (
    <h2>
      <CollapsibleHeaderContainer
        className={className}
        classNameIcon={classNameIcon}
        showArrowIcon={showArrowIcon}
        onClick={onClick}
      >
        {title && <span>{title}</span>}
        <div className={twMerge('flex-1', classNameContainer)}>{children}</div>
      </CollapsibleHeaderContainer>
    </h2>
  );
}
