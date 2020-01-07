import unit from './immset';

const a = new Set([1]);
const b = new Set([2]);
const c = new Set([3]);

test('add', () => {
  // expected
  expect(unit.add(a, 5)).toEqual(new Set([1, 5]));
});

test('delete', () => {
  // expected
  expect(unit.delete(a, 1)).toEqual(new Set([]));
});
