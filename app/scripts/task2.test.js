const checkValid = require('./task2.js');
test('credit card should be valid', () => {
  expect(checkValid({
    firstName: 'Diana',
    secondName: 'Wieczorek',
    email: 'email@email.com',
    country: 'Polska',
    postalCode: '10001',
    phoneNumber: '2126929392',
    creditCardNumber: '4242424242424242',
    securityCode: '123',
    expDate: "0620"
  })).toBe(undefined);
});

test('inputs cannot be empty', () => {
  expect(checkValid({})).toStrictEqual( {
    firstName: ["First name can't be blank"],
    secondName: ["Second name can't be blank"],
    email: ["Email can't be blank"],
    country: ["Country can't be blank"],
    postalCode: ["Postal code can't be blank"],
    phoneNumber: ["Phone number can't be blank"],
    creditCardNumber: ["Credit card number can't be blank"],
    securityCode:["Security code can't be blank"],
    expDate:["Exp date can't be blank"]
  });
});

test('credit card should be valid', () => {
  expect(checkValid({
    firstName: 'D',
    secondName: 'W',
    email: 'email',
    country: 'Polska',
    postalCode: '100',
    phoneNumber: 2126929,
    creditCardNumber: '4242424242424',
    securityCode: '1',
    expDate: "061"
  })).toStrictEqual({
    firstName:["First name must be at least 2 characters"],
    secondName:["Second name must be at least 2 characters"],
    email:["Email is not a valid email"],
    postalCode:["Postal code is the wrong length (should be 5 characters)"],
    phoneNumber:["Phone number has an incorrect length"],
    creditCardNumber: ["Credit card number is the wrong length (should be 16 characters)"],
    securityCode:["Security code is the wrong length (should be 3 characters)"],
    expDate:["Exp date is the wrong length (should be 4 characters)"],});
});

