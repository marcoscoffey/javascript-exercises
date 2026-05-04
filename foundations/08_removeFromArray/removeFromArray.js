const removeFromArray = function(array, ...value) {

    let newArr = [];

    for (let i = 0; i < array.length; i++){
        let mediumArr = true;
        for (let x = 0; x < value.length; x++){
            if (array [i] === value[x]){
                mediumArr = false;
            }
        }
        if (mediumArr == true) newArr.push(array[i]);
    }
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
