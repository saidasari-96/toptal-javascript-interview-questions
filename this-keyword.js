/*
'use strict';
var foo = 'global';
var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);// this refers scope of owner of the function.
        console.log("outer func:  self.foo = " + self.foo);
        (function () {
            console.log("inner func:  this.foo = " + this.foo); //comment the use strict at the top line.
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

*/

/*
console.log('====================================');
var _name="Global";
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(stoleSecretIdentity.call({_name:"Custom context"}));
console.log(hero.getSecretIdentity());
*/

console.log('====================================');


function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    }
};

obj.method(fn, 1, 8);

