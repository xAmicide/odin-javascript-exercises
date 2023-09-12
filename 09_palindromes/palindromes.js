const palindromes = function (x) {
  var punctuation = /[\.,?!]/g;
  x = x.toLowerCase();
  x = x.replace(punctuation, "");
  x = x.replace(/\s/g, "");
  let y = x;
  return y == x.split("").reverse().join("");
};
console.log(palindromes("kek! kek kek"));
// Do not edit below this line
module.exports = palindromes;
