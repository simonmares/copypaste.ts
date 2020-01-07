import * as unit from './setutils';

test('merge', () => {
  const { merge } = unit;

  const a = new Set([1]);
  const b = new Set([1, 2]);
  const c = new Set([2, 3]);

  // expected
  expect(merge(a, b)).toEqual(new Set([1, 2]));
  expect(merge(a, b, c)).toEqual(new Set([1, 2, 3]));
  expect(merge(b, c)).toEqual(new Set([1, 2, 3]));

  // edges
  expect(merge(new Set(), new Set())).toEqual(new Set());
});
