import * as unit from './arrayutils';

test('flat', () => {
  const { flat } = unit;
  // expected
  expect(flat([[111], [123]])).toEqual([111, 123]);
  // edges
  expect(flat([])).toEqual([]);
  expect(flat([[], []])).toEqual([]);
});
