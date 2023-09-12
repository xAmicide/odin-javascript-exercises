const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (sum) {
  let count = 0;
  for (let i = 0; i < sum.length; i++) {
    count += sum[i];
  }
  return count;
};

const multiply = function (x) {
  let count = 1;
  for (let i = 0; i < x.length; i++) {
    count *= x[i];
  }
  return count;
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  let count = 1;
  for (let i = 1; i < x + 1; i++) {
    count = count * i;
  }
  return count;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
