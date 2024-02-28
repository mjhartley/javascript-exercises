const repeatString = function(repeatString, repeatNo) {
    let returnString = "";

    if(repeatNo < 0){
        return 'ERROR';
    }

    for (let index = 0; index < repeatNo; index++) {
        returnString += repeatString;
    
    }

    return returnString;

};

// Do not edit below this line
module.exports = repeatString;
