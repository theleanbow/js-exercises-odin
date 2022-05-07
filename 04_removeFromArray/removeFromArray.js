const removeFromArray = function (myArray, ...toBeRemoved) {
  // function removeFromArray(myArray, toBeRemoved) {
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < toBeRemoved.length; j++) {
      if (myArray[i] === toBeRemoved[j]) {
        let index = myArray.indexOf(toBeRemoved[j]);
        myArray.splice(index, 1);
        i = 0;
        //saves 0.2 seconds of exection time, took me 1 hours to fix because of this
        // toBeRemoved.splice(j--, 1);
      }
    }
  }
  return myArray;
};

// removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
