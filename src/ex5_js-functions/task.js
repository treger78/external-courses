function Calculator() {
  let currentState = 0;

  return {
    getResult: () => currentState,

    reset: () => { currentState = 0; },

    add: function add(...number) {
      if ([...number].length === 0) return add;
      number.forEach((item) => { currentState += item; });
      return add;
    },

    subtract: function subtract(...number) {
      if ([...number].length === 0) return subtract;
      number.forEach((item) => { currentState -= item; });
      return subtract;
    },

    divide: function divide(...number) {
      if ([...number].length === 0) return divide;
      number.forEach((item) => { currentState /= item; });
      return divide;
    },

    multiply: function multiply(...number) {
      if ([...number].length === 0) return multiply;
      number.forEach((item) => { currentState *= item; });
      return multiply;
    },
  };
}

const calculator = Calculator();

module.exports = calculator;
