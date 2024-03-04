const sumAll = function(num1 , num2) {

    if ((isNaN(num1)) || (isNaN(num2))){
         return 'ERROR';
    }

    if((num1 < 0) || (num2 <0)){

        return 'ERROR';
    }


    if (!Number.isInteger(num1) || !Number.isInteger(num2)){

        return 'ERROR';

    }



    let result = 0;

    for (let index = num1; index <= num2; index++) {
        result += index;       
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
