import { ReactNode } from 'react';

const findComponent = (child: ReactNode, componentNames: string[]) => {
  const normalizedComponentNames = componentNames.map((name) => name.toLowerCase());

  const childObject = Object(child);

  return (
    childObject &&
    childObject['type'] &&
    childObject['type']['name'] &&
    normalizedComponentNames.includes(childObject['type']['name'].toLowerCase())
  );
};

export const getServerComponent = (children: ReactNode, ...componentNames: string[]) => {
  const contents: ReactNode[] = [];
  const elements: ReactNode[] = [];

  const isArray = Array.isArray(children);

  if (isArray) {
    (children as ReactNode[]).forEach((child) => {
      if (findComponent(child, componentNames)) {
        contents.push(child);
      } else {
        elements.push(child);
      }
    });
  } else {
    if (findComponent(children, componentNames)) {
      contents.push(children);
    } else {
      elements.push(children);
    }
  }

  if (elements.length === 0) {
    throw new Error(`Nenhum elemento foi especificado para criar o ${componentNames.join(', ')}`);
  }

  return { contents, elements };
};

export const getClientComponent = (children: ReactNode, ...componentNames: string[]) => {
  const contents: ReactNode[] = [];
  const elements: ReactNode[] = [];

  const isArray = Array.isArray(children);

  if (isArray) {
    (children as ReactNode[]).forEach((child) => {
      if (findComponent(child, componentNames)) {
        contents.push(child);
      } else {
        elements.push(child);
      }
    });
  } else {
    if (findComponent(children, componentNames)) {
      contents.push(children);
    } else {
      elements.push(children);
    }
  }

  if (elements.length === 0) {
    throw new Error(`Nenhum elemento foi especificado para criar o ${componentNames.join(', ')}`);
  }

  return { contents, elements };
};
