const validate = require("validate.js");
const validationRule = {
  firstName: {
    presence: true,
    length: {
      minimum: 2,
      message: "must be at least 2 characters"
    }
  },
  secondName: {
    presence: true,
    length: {
      minimum: 2,
      message: "must be at least 2 characters"
    }
  },
  email: {
    presence: true,
    email: true
  },
  country: {
    presence: true,
  },
  postalCode: {
    presence: true,
    numericality: true,
    length: {is:5}
  },
  phoneNumber: {
    presence: true,
    numericality: true,
    length: {is:10}
  },
  creditCardNumber: {
    presence: true,
    format: {
      pattern: /^(34|37|4|5[1-5]).*$/,
      message: function (value, attribute, validatorOptions, attributes, globalOptions) {
        return validate.format("^%{num} is not a valid credit card number", {
          num: value
        });
      }
    },
    length: function (value, attributes, attributeName, options, constraints) {
      if (value) {
        // Amex
        if ((/^(34|37).*$/).test(value)) return {is: 15};
        // Visa, Mastercard
        if ((/^(4|5[1-5]).*$/).test(value)) return {is: 16};
      }
      // Unknown card, don't validate length
      return false;
    }
  },
  securityCode: {
    presence: true,
    numericality: true,
    length: {is: 3}
  },
  expDate: {
    presence: true,
    length: {is: 4}
  }
};

function checkValid (objectToValidate){
  return validate(objectToValidate, validationRule)
}
module.exports = checkValid;
