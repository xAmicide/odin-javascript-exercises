const fibonacci = function (x) {
  if (x < 0) {
    return "OOPS";
  }
  let num1 = 0;
  let num2 = 1;
  let next = 0;
  for (let i = 0; i < x; i++) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
  }
  return num1;
};

// Do not edit below this line
module.exports = fibonacci;
