const ftoc = function (fahrenheit) {
  return parseFloat(((5 * (fahrenheit - 32)) / 9).toFixed(1));
};

const ctof = function (celcius) {
  return parseFloat(((9 * celcius) / 5 + 32).toFixed(1));
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
