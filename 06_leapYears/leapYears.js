const leapYears = function (year) {
  if (year % 4 == 0) {
    if (year % 25 == 0) {
      if (year % 400 == 0) return true;
      else return false;
    } else return true;
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
