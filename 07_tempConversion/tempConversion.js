const convertToCelsius = function(temperatureInFahrenheit) {
  /*
  Formula to convert from F to C:
  x °F ≘ (x − 32) × 5/9 °C
  */

  return parseFloat(((temperatureInFahrenheit - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(temperatureInCelsius) {
  /*
  Formula to convert from C to F:
  x °C ≘ (x * 5/9) + 32 °F
  */
  return parseFloat(((temperatureInCelsius * 9/5) + 32) .toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
