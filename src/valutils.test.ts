import * as unit from './valutils';

test('coerceNum', () => {
  const { coerceNum } = unit;
  // ok
  expect(coerceNum(111, 123)).toEqual(111);
  // err
  expect(coerceNum('number', 123)).toEqual(123);
});

test('coerceInt', () => {
  const { coerceInt } = unit;
  // ok
  expect(coerceInt(111, 123)).toEqual(111);
  expect(coerceInt(0.2, 123)).toEqual(0);
  // err
  expect(coerceInt('', 123)).toEqual(123);
  expect(coerceInt({}, 123)).toEqual(123);
});

test('coerceStr', () => {
  const { coerceStr } = unit;
  // ok
  expect(coerceStr('111', 'defaultStr')).toEqual('111');
  // (can be coerced)
  expect(coerceStr(111, 'defaultStr')).toEqual('111');
  // err
  expect(coerceStr({}, 'defaultStr')).toEqual('defaultStr');
  expect(coerceStr({})).toEqual('');
});

test('isValidNumber', () => {
  const { isValidNumber } = unit;
  // ok
  expect(isValidNumber(111)).toEqual(true);
  expect(isValidNumber(1.11)).toEqual(true);
  // err
  expect(isValidNumber('111')).toEqual(false);
  expect(isValidNumber('1.11')).toEqual(false);
  expect(isValidNumber(null)).toEqual(false);
  expect(isValidNumber(undefined)).toEqual(false);
});
