/* const convertToCelsius = function(temp) {

    temp = parseInt(temp);

    temp  = (temp - 32) * (5/9);

    return temp.toFixed(1);

};

const convertToFahrenheit = function(temp) {

  temp = parseInt(temp);

  temp  = (temp * (9/5)) + 32;

  return temp.toFixed(1);




}; */


const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
