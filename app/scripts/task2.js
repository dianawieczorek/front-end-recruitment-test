window.onload = function () {
  document.getElementById("cardNumber").addEventListener("focusout", (e => {
    console.log(validate({creditCardNumber: e.target.value}, constraints))
  }));
};

const constraints = {
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
  }
}
