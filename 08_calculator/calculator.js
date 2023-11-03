const add = function(number1, number2 = 0) {
	return number1 + number2;

};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(sumArray) {
	let totalSum = sumArray.reduce((total, number) => total + number, 0);
  return totalSum;
};

const multiply = function(multiplyArray) {
  return multiplyArray.reduce((total, number) => total * number, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(toNumber) {
  let factorialArray = [1];
  
  for (let i = 1; i <= toNumber; i++) {
    factorialArray.push(i);
  }

  return factorialArray.reduce((fact, number) => fact * number, 1);
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
