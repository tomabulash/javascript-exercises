const convertToCelsius = function(temp) {

  
  const newTemp = ((temp-32)*0.5556);
  if (newTemp == 0) return 0;
  return +newTemp.toFixed(1);

};

const convertToFahrenheit = function(temp) {

  const newTemp = ((temp*1.8)+32);
  if (newTemp == 0) return 0;
  return +newTemp.toFixed(1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
