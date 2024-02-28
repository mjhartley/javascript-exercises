const reverseString = function(inputString) {

    const reverseStringArray = inputString.split('');

    returnString = reverseStringArray.reverse().join('');
    
    console.log("Return String: " + returnString);
    return returnString;

};

// Do not edit below this line
module.exports = reverseString;
