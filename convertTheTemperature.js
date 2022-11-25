// Question no -2469

// Question 


// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.


// Sample Test Case 


// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.


var convertTemperature = function(celsius) {
  let  c= celsius+273.15
  let k = celsius*1.80+32.00
  return[c,k]
};

console.log(convertTemperature(122.11))