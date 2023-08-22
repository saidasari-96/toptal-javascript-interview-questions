let valueToBoolExpressionResult = [undefined, null, 0, false, '', NaN, 12, -12, "Non-empty", {}, [], Date()];
valueToBoolExpressionResult.forEach(element => {
    console.log(element);
    if (element) {
        console.log('>>>>>>>>>>Truthy value');
    } else {
        console.log('>>>>>>>>>>Falsy value');
    }
});

console.log('=================================');

console.log(false == '0')
console.log(false === '0')

console.log('=================================');

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);