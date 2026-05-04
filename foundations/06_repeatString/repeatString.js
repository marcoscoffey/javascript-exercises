const repeatString = function (string, num) {
    if (num < 0) {
        return "ERROR";
    } else {
        let finalString = "";
        let i = 1;
        while (i <= num) {
            finalString = finalString + string;
            i++;
        }
        return finalString;
    }


};

// Do not edit below this line
module.exports = repeatString;
