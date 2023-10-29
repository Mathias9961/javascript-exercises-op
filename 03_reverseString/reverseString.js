const reverseString = function(wordToReverse) {
    let reversedWord = "";

    for (let i = wordToReverse.length; i > 0; i--) {
        reversedWord += wordToReverse[i-1];
    }

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
