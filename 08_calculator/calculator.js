const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};
const sum = function (numbers) {
  const sumOfAll = numbers.reduce((total, number) => {
    num = parseInt(number);
    if (isNaN(num)) {
      return 0;
    } else {
      return total + num;
    }
  }, 0);
  return sumOfAll;
};
const multiply = function (numbers) {
  const productOfAll = numbers.reduce((total, number) => {
    num = parseInt(number);
    if (isNaN(num)) {
      return 0;
    } else {
      return total * num;
    }
  }, 1);
  return productOfAll;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
