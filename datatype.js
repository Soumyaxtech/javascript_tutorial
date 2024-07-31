"use strict";// TREAT ALL JAVASCRIPT CODE AS NEWER VERSION

//alert(3+2) // HERE WE ARE USING NOTE.JS NOT BROWSER SO CAN'T WRITE LIKE THIS


let name = "soumya" // string type
let age = 23    // int type {number}
let isLoggedIn = false // boolean
let temp=null;      // null
let userEmail;      // undefined type
const id = Symbol(351765186);       // Symbol type
const bigNumber=564675876745n;

/*  DIFF TYPES OF DATATYPES ..........*/

// number ==> 2 to power 53
// bigint
// string ==> ""
// boolean ==> true/false
// null ==> standalone value
// undefined ==> value is not assigned
// symbol ==> unique

//......................................................

// OBJECT

console.log(typeof "soumya")
console.log(typeof null)  // TYPE OF NULL IS OBJECT
console.log(typeof undefined)   // UNDEFINED ITSELF A TYPE


/* NON-PREMITIVE DATATYPES AND THERE DECLEARATION............*/

// EXAMPLE : ARRAY,OBJECT,FUNCTION

const names = ["soumyajit","koley","babai"]     // ARRAY DECLEARATION
console.log(names)

let myObj={
    roll: 157,      // OBJECT IS DECLEARED IN BW CURLY BRACES
    class: "CSE3",

}

const myFunction= function(){
    console.log("hello world")
}


console.log(typeof myFunction);