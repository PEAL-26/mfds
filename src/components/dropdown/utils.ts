import { ReactNode, isValidElement } from 'react';

import { getClientComponent, getServerComponent } from '../../helpers/components';

export function getComponents(children: ReactNode) {
  const contents: ReactNode[] = [];
  const elements: ReactNode[] = [];

  if (isValidElement(children)) {
    const serverComponents = getServerComponent(
      children.props.children,
      'DropdownExpansibleArea',
      'ExpansibleArea',
      'dropdown_expansible_area_DropdownExpansibleArea',
    );

    contents.push(serverComponents.contents);
    elements.push(serverComponents.elements);
  } else {
    const clientComponents = getClientComponent(
      children,
      'expansible-area',
      'ExpansibleArea',
      'dropdown_expansible_area_DropdownExpansibleArea',
      'DropdownExpansibleArea',
    );

    contents.push(clientComponents.contents);
    elements.push(clientComponents.elements);
  }

  return { contents, elements };
}
