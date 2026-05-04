const sumAll = function(a,b) {
    
    if(a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number" || a % 1 !== 0 || b % 1 !== 0) return "ERROR";
    else {
        let smallest;
        let biggest;
            if (a < b){
            smallest = a;
            biggest = b;
            } else {smallest = b; biggest = a}

        let sum = 0;

        for(let i = smallest; i <= biggest; i++){
            sum = sum + i;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
