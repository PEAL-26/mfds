type AnyObject = Record<string, any>;

export function getPropertyValue<T extends AnyObject, K extends keyof T>(
  obj: T,
  property: K,
): T[K] | undefined {
  if (obj && typeof obj === 'object' && property) {
    return obj[property];
  }

  return undefined;
}
