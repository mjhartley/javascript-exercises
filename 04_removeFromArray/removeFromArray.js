const removeFromArray = function(iArray, iRemove) {


    // 

    //


    iRemove = parseInt(iRemove);
    iRemove = iRemove - 1;
    iArray.splice(iRemove, 1);

    return iArray;

};

// Do not edit below this line
module.exports = removeFromArray;
