export function merge<T>(a: Set<T>, b: Set<T>, ...rest: Set<T>[]): Set<T> {
  let flat = [...a, ...b];
  for (const oneSet of rest) {
    flat = [...flat, ...oneSet];
  }
  return new Set(flat);
}
