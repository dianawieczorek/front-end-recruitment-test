const checkValid = require('./task2.js');
test('credit card should be valid', () => {
  expect(checkValid({creditCardNumber: ''})).toBe(undefined);
});
