let score = "33ab"

console.log(typeof score)
console.log(typeof (score))

let ConvertInNum = Number(score)    // CONVERT ANY DATATYPE TO NUMBER

console.log(typeof ConvertInNum)
console.log(ConvertInNum)       // CHECKING THE VALUE OF CONVERTED DATATYPE
                                // VALUE MAY COME NaN

 let score1 = null

console.log(typeof score1)
console.log(typeof (score1))

let ConvertInNum1 = Number(score1)    // CONVERT ANY DATATYPE TO NUMBER
                                      // HERE OBJECT--->NUMBER
console.log(typeof ConvertInNum1)     // VALUE COME 0
console.log(ConvertInNum1)   


let score2 = false

console.log(typeof score2)
console.log(typeof (score2))

let ConvertInNum2 = Number(score2)    // CONVERT ANY DATATYPE TO NUMBER
                                      // HERE BOOLEAN--->NUMBER
console.log(typeof ConvertInNum2)     // TRUE-->1 FALSE-->0
console.log(ConvertInNum2)

/* TO CONVERT ANY DATATYPE WE HAVE TO 
WRITE..............DATATYPE NAME(VARIABLE NAME)   */


let num=0
let str=""
let boolnum = Boolean(num)
                        // CONVERSION OF NUMBER TO BOOLEAN........
let boolstr = Boolean(str)
console.log(boolnum);
console.log(typeof(boolnum))    // CONVERSION OF STRING TO BOOLEAN
console.log(boolstr)        // "" ---> FALSE "SOUMYA" ---> TRUE


let num1=50
let strnum=String(num1)
                            // CONVERSION OF OTHER DATATYPE TO STRING
console.log(strnum)
console.log(typeof strnum)