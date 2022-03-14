const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((total, number) => total + number, 0);

const multiply = (arr) => arr.reduce((total, number) => number * total, 1);

const power = (a, b) => Math.pow(a, b);

const factorial = n => n == 0 ? 1 : n * factorial(n - 1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
