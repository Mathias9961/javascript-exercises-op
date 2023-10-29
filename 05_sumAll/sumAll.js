const sumAll = function(firstNumber, secondNumber) {

    //Final result for the sum of all the numbers between
    //the smaller number and the largest number (both included) 
    let result = 0;

    let fromNumber = firstNumber;
    let toNumber = secondNumber;

    //Confirm that both arguments are positive numbers
    if (
        typeof fromNumber !== 'number' ||
        typeof toNumber !== 'number' ||
        fromNumber < 0 ||
        toNumber < 0
        ) {
        result = "ERROR";
    } else {
        //reorder the parameters if the second argument is smaller
        if (firstNumber > secondNumber) {
            fromNumber = secondNumber;
            toNumber = firstNumber;
        }

        //for each number between the two arguments, add the value to the result
        for (let i = fromNumber; i <= toNumber; i++) {
            result += i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
