// function sum(x) {
//     if (arguments.length == 2) {
//         return arguments[0] + arguments[1];
//     } else {
//         return function (y) { return x + y; };
//     }
// }

// console.log(sum(2, 3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5
//=======================

function sum(currentNumber) {
    var total = currentNumber;
    var func = function (nextNumber) {
        if (nextNumber) {
            total += nextNumber;
            return func;
        }
        else {
            return total;
        }
    };
    return func;
}

console.log(sum(2)(5)(2)(5)());