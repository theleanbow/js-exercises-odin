const repeatString = function (string, num) {
  let stringConcat = "";
  if (num < 0) return "ERROR";
  else {
    for (i = 0; i < num; i++) {
      stringConcat += string;
    }
    return stringConcat;
  }
};

// Do not edit below this line
module.exports = repeatString;
