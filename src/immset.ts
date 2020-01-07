//
// Immutable set API
//

export function addItem<T>(set: Set<T>, item: T): Set<T> {
  const copy = new Set([...set]);
  copy.add(item);
  return copy;
}

export function removeItem<T>(set: Set<T>, item: T): Set<T> {
  const copy = new Set([...set]);
  copy.delete(item);
  return copy;
}

// alternative API is a object as a collection
const immset = {
  add: addItem,
  delete: removeItem,
};

export default immset;
