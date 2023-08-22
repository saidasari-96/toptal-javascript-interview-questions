
let updateCounter = (function getCounter() {
    var counter = 0;
    function incrementCounter() {
        return ++counter;
    }
    return incrementCounter;
})();

console.log(updateCounter());
console.log(updateCounter());


// A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain. 
// The closure has access to variables in three scopes; 
// specifically: (1) variable in its own scope, 
// (2) variables in the enclosing function’s scope, and 
// (3) global variables.

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);


var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);