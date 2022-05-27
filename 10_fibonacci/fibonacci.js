//passed all test cases
const fibonacci = function (number) {
  if (number < 0) return "OOPS";
  number = parseInt(number);
  if (number <= 2) return 1;
  else return fibonacci(number - 2) + fibonacci(number - 1);
};

// Do not edit below this line
module.exports = fibonacci;
