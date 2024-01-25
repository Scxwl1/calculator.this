const readlineSync = require('readline-sync');

const calculator = {
  a: 0,
  b: 0,

  read: function() {
    this.a = parseFloat(readlineSync.question ('a'));
    this.b = parseFloat(readlineSync.question ('b'));
  },

  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  }
};

module.exports = calculator;
