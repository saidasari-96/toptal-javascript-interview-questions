var iifeResult1 = function () {
    return "iife-return-value";
}();
console.log(iifeResult1);


var iifeResult2 = function (msg) {
    return msg || "iife-return-value";
}("Hello, IIFE");
console.log(iifeResult2);
