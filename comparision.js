// console.log(2>1);
// console.log(1<2);
// console.log(1!=2);      //EASY COMPARISION 
// console.log(1<=2);
// console.log(2>=1);
// console.log(1==2);


/* COMPARISON BW DIFFERENT DATATYPE ................. MOSTLY AVOID THIS COMPARISON  */

console.log("1"<2);
console.log("02">1);    // JAVASCRIPT AUTOMATICALLY CONVERT IT INTO NUMBER
                        // ALWAYS IT DOES NOT GIVE RIGHT ANS


console.log(null>0);  // (1)false
console.log(null==0);   // (2)false
console.log(null>=0);   // (3)true  

    /* THE REASON IS THAT AN EQUALITY CHECK == AND
        COMPARISON {> < >= <=} WORK DIFFERENTLY
         COMPARISON CONVERT NULL TO A NUMBER TREATING 
        IT AS 0 THATS WHY (3) CONVERTS NULL TO 0 AND 
        SO TRUE AND IN (1) IT IS FALSE  */

// COMPARISON OF UNDEFINED ALWAYS ----> FALSE

//----------------------------------------------------------------

// === --> STRICT CHECK --> CHECK VALUE ALONG WITH ITS DATATYPE 
                        // IF BOTH SAME COMPARISON OCCUR

console.log("2"==2);    // true only check value
console.log("2"===2);   // false check datatype also