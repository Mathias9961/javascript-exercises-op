const leapYears = function(year) {
    //if the checks fail, throw error
    let yearIsLeapYear = 'ERROR';

    
    /*
    Logic to know if the year is leap year or not:
    Leap years are years divisible by four (like 1984 and 2004). 
    However, years divisible by 100 are not leap years (such as 1800 and 1900)
    unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
    */

    if (year % 4 !== 0) {
        // If the year is not divisible by 4, then it's not a leap year
        yearIsLeapYear = false;
    
    } else if (year % 100 === 0) {
        // If it is divisible by 4, check if it's also divisible by 100
        // Then check if it's also divisible by 400
        if (year % 400 === 0) {
            //If divisible by 400 then it's leap year
            yearIsLeapYear = true;
        } else {
            //If only divisible by 4 and 100, then it's not a leap year
            yearIsLeapYear = false;
        }
    } else {
        //It is divisible by and not 100, so it's a leap year
        yearIsLeapYear = true;
    }

    return yearIsLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
