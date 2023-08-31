function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();// removing while spaces
    return (str == str.split('').reverse().join(''));// 
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'F
str === str.reverse()// single word..
