let valueToBoolExpressionResult = [undefined, null, 0, false, '', NaN, 12, -12, "Non-empty", {}, [], Date(), { dfdf: "abc" }, [1, 2, 3]];
valueToBoolExpressionResult.forEach(element => {
    console.log(element);
    if (element) {
        console.log('>>>>>>>>>>Truthy value');
    } else {
        console.log('>>>>>>>>>>Falsy value');
    }
});

console.log('=================================');
// == operator convert and compare..
console.log(false == '0')
console.log(false === '0')

console.log('=================================');

//true is treated as 1.
console.log(1 < 2 < 3); //left to right, true<3
console.log(3 > 2 > 1);//