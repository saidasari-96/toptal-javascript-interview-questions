'use strict';
(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

   console.log("===============================");

  (function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

console.log("===============================");

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();