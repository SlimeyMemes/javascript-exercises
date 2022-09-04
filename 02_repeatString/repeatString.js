const repeatString = function(str,num) {
    let str1 = "";
    if(num >=0){
    for(let i = 0; i < num;i++)
    {
        str1 = str1 + str;
    }
    return str1;
}
else{
    return "ERROR";
}
};

// Do not edit below this line
module.exports = repeatString;
