const removeFromArray = function(...rem) {
    const arr = rem[0];
    const newArray = [];
    arr.forEach(element => {
        if(!rem.includes(element))
        {
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
