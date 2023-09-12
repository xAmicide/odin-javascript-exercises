const convertToCelsius = function (fahrenheit) {
  let celsius = Math.round((((fahrenheit - 32) * 5) / 9) * 10) / 10;
  if (Number.isInteger(celsius)) {
    return celsius;
  } else {
    return parseFloat(celsius.toFixed(1));
  }
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
  if (Number.isInteger(fahrenheit)) {
    return fahrenheit;
  } else {
    return parseFloat(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
