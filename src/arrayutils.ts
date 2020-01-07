// @flow

export function flat<T>(nested: T[][]): T[] {
  /**
   * Native API: Array.prototype.flat
   */
  return nested.reduce((acc, val) => [...acc, ...val], []);
}
