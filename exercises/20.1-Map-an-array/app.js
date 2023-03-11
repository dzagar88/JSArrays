let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(celsius) {
  // Convert Celsius to Fahrenheit
  let fahrenheit = (celsius * 9/5) + 32;
  // Return the new Fahrenheit value
  return fahrenheit;
});

console.log(arrayOfFahrenheitValues); // Outputs [28.4, 93.2, 132.8, 14]