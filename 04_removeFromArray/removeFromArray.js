const removeFromArray = function(originalArray, valueToRemove, ...additionalValues) {


    for (let i = 1; i < arguments.length; i++) {

        let valueIndex = originalArray.findIndex(
                (value) => value === arguments[i]
            );

        if ( valueIndex >= 0 ) {
                originalArray.splice(valueIndex, 1);
            }
    }

    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
