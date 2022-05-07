const sumAll = function (num1, num2) {
  let sum = 0;
  //   if (num1 > num2) {
  //     for (let i = num2; i <= num1; i++) {
  //       sum += i;
  //     }
  //   } else {

  //swap two variables
  //handles num1>num2 by exchanging them
  if (typeof num1 != "number" || typeof num2 != "number") return "ERROR";
  if (num1 > num2) num2 = [num1, (num1 = num2)][0];
  if (num1 < 0 || num2 < 0) return "ERROR";
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
