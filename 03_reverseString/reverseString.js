const reverseString = function(str) {
    let length = str.length;
    let arr = str.split("");
    let rev = "";
    for(let i = length-1; i >= 0; i--)
    {
        rev += arr[i];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
