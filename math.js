console.log(Math)

const num = -4
console.log(Math.abs(num))  // ABSOLUTE VALUE (abs) used to
                            // convert negative to positive 
console.log(Math.abs(-897))

console.log(Math.round(7.5))    // round 7.3 --> 7 and 7.5 --> 8

console.log(Math.ceil(6.2))  // ceiling gives upper value 6.1 --> 7 also 6.6 --> 7

console.log(Math.floor(5.8))    // floor gives lower value 5.8 --> 5 also 5.3 --> 5

console.log(Math.max(3,6,8,9,6))
console.log(Math.min(4,7,2,8.15))

// MOST USE OF MATH IS math.random.............................

console.log(Math.random())  // it gives random number b/w 0 and 1 

console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))


// for games like ludo
const min = 1
const max = 6

console.log(Math.floor((Math.random() * (max - min + 1)) + min) )
