const num = 230
console.log(num)    // DECLEARATION OF NUMBER

const num1 = new Number(340.67)    // DECLEARATION OF NUMBER
console.log(num1)


const str = num1.toString()     // CONVERT NUMBER TO STRING

console.log(str)
console.log(str.length)

console.log(num1.toFixed(1))    // TOFIXED IS USED IN E-COMMEARCE WEBSITES 340.67-->340.7
console.log(num1.toPrecision(3))    // IT GIVES PRECISION 340.67--->341

const digit = 1000000000
console.log(digit)
console.log(digit.toLocaleString('en-IN'))

console.log(Number.MIN_VALUE)
