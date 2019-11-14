import * as dateutils from './dateutils';

test('isDateValid', () => {
  const unit = dateutils.isDateValid;

  // ok
  expect(unit(new Date())).toEqual(true);
  // err
  expect(unit(new Date('invalid'))).toEqual(false);
});
