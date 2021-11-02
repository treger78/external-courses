function Calculator() {
  return {
    currentState: 0,

    getResult: function getResult() { return this.currentState; },

    setState: function setState(value) {
      if (!value) return this;

      this.currentState = value;

      return this;
    },

    reset: function reset() {
      this.currentState = 0;

      return this;
    },

    fetchData: function fetchData(callback) {
      if (!callback) return this;

      (async () => { callback(500); })();

      return this;
    },

    add: function add(...number) {
      if ([...number].length === 0) return this;

      number.forEach((item) => { this.currentState += item; });

      return this;
    },

    subtract: function subtract(...number) {
      if ([...number].length === 0) return this;

      number.forEach((item) => { this.currentState -= item; });

      return this;
    },

    divide: function divide(...number) {
      if ([...number].length === 0) return this;

      number.forEach((item) => { this.currentState /= item; });

      return this;
    },

    multiply: function multiply(...number) {
      if ([...number].length === 0) return this;

      number.forEach((item) => { this.currentState *= item; });

      return this;
    },
  };
}

const calculator = Calculator();

module.exports = calculator;
