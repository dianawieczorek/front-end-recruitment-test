const checkValid = require('./task2.js');
test('credit card should be valid', () => {
  expect(checkValid({
    firstName: 'Diana',
    secondName: 'Wieczorek',
    email: 'email@email.com',
    country: 'Polska',
    postalCode: '10001',
    phoneNumber: 2126929392,
    creditCardNumber: '4242424242424242',
    securityCode: '123',
    expDate: "06/20"
  })).toBe(undefined);
});

test('credit card cannot be empty', () => {
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

// test('credit card have to be length 16', () => {
//   expect(checkValid({
//     creditCardNumber: '4212345678912'
//   })).toStrictEqual( {creditCardNumber: ["Credit card number is the wrong length (should be 16 characters)"]});
// });
