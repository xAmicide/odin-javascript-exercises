const sumAll = function (num1, num2) {
  let count = 0;
  start = Math.min(num1, num2);
  end = Math.max(num1, num2);
  if (start < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }
  for (let i = start; i < end + 1; i++) {
    count += i;
  }
  return count;
};

// Do not edit below this line
module.exports = sumAll;
