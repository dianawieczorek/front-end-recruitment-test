const checkValid = require('./task2.js');
test('credit card should be valid', () => {
  expect(checkValid({creditCardNumber: '4242424242424242'})).toBe(undefined);
});
test('credit card cannot be empty', () => {
  expect(checkValid({other: ''})).toStrictEqual( {creditCardNumber: ["Credit card number can't be blank"]});
});
test('credit card have to be length 16', () => {
  expect(checkValid({creditCardNumber: '4212345678912'})).toStrictEqual( {creditCardNumber: ["Credit card number is the wrong length (should be 16 characters)"]});
});
