const palindromes = function (texts) {
  text = Array.from(texts.toLocaleLowerCase());
  let reverse = "";
  for (let i = text.length - 1; i >= 0; i--) {
    if (text[i].match(RegExp, a - z)) reverse += text[i];
  }
  if (texts === reverse) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
// "gdgd".toLocaleLowerCase()
