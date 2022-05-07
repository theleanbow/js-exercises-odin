const reverseString = function (string) {
  let str = string.split("");
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
