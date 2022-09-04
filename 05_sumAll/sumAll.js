const sumAll = function(x,y) {
    let sum = 0;
    let big = 0;
    let small = 0;
    if(x > 0 && y > 0 && Number.isInteger(x) && Number.isInteger(y))
    {
        if(x >= y)
        {
             big = x;
             small = y
        }
        else{
            big = y;
            small = x;
        }
    }
    else
    {
        return 'ERROR';
    }
    for(let i = small; i <= big; i++)
    {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
