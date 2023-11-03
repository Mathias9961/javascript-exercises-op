const add = function(number1, number2 = 0) {
	return number1 + number2;

};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(sumArray) {
	let totalSum = sumArray.reduce((total, number) => {return total + number}, 0);
  return totalSum;
};

const multiply = function(number1, number2) {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
