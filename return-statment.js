function foo1() {
    return {
        bar: "hello"
    };
}
//semicolon is optional at the end of the statement.
function foo2() {
    return //;
    {
        bar: "hello"
    };
}

console.log('foo1');
console.log(foo1());

console.log('foo2');
console.log(foo2());