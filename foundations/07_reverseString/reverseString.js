const reverseString = function(string) {
    let array = string.split("");
    let reverseArray = array.reverse();
    let reversedString = reverseArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
