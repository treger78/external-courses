function Hangman(word) {
  return {
    rightSymbols: [],

    wrongSymbols: [],

    maxErrors: 6,

    guessedArray: [...word.toLowerCase().replace(/./g, '_').split('')],

    guess: function guess(symbol) {
      if (word.includes(symbol) && !this.rightSymbols.includes(symbol)) {
        this.rightSymbols.push(symbol);

        for (let i = 0; i < this.guessedArray.length; i += 1) {
          const symbolPos = word.indexOf(symbol, i);

          if (symbolPos >= 0) {
            this.guessedArray[symbolPos] = symbol;
          }
        }

        this.getGuessedString();
      } else {
        this.wrongSymbols.push(symbol);

        if (this.getErrorsLeft() === 0) {
          return `wrong letter errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols()} | You lose. Try again!`;
        }

        return `wrong letter errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols().join(',')}`;
      }

      return this;
    },

    getGuessedString: function getGuessedString() {
      if (!this.guessedArray.includes('_')) {
        return `${this.guessedArray.toString().replace(/,/g, '')} | You won!`;
      }

      return this.guessedArray.toString().replace(/,/g, '');
    },

    getWrongSymbols: function getWrongSymbols() {
      return this.wrongSymbols;
    },

    getErrorsLeft: function getErrorsLeft() {
      return this.maxErrors - this.wrongSymbols.length;
    },

    getStatus: function getStatus() {
      return `${this.getGuessedString()} | errors left ${this.getErrorsLeft()}`;
    },

    startAgain: function startAgain(newWord) {
      this.rightSymbols = [];
      this.wrongSymbols = [];
      this.guessedArray = [...newWord.toLowerCase().replace(/./g, '_').split('')];

      return this;
    },
  };
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
