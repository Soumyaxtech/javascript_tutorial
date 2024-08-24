const regularName = {
    id : "123669a",
    fullName : {
        firstName : "Soumyajit",
        lastName : "Koley",
    },
    email : "soumya@gmail.com",
}
regularName.id = "6735135"
console.log(regularName.fullName.lastName)  // to print obj inside obj
console.log(regularName.id)

// ADDITION OF TWO OR MORE OBJECT ..............

const obj1 = {
    1 : "ba",
    2 : "ab",
}
const obj2 = {
    3 : "dc",
    4 : "cd",
}
const obj3 = {
    5 : "fe",
    6 : "ef",
}
const obj4 = Object.assign({},obj1,obj2,obj3)   // less use 
console.log(obj4)
const obj5 = {...obj1,...obj2,...obj3}  // spreade opearator(more use)
console.log(obj5)

// if mul object present in array to access this ---->  user[1].email
    //  array name [which index to access].what to access

//..............................................................................

// how to access keys and values in js ..............

const idd = Object.keys(regularName)
const idd1 = Object.keys(regularName.fullName)
console.log(idd)    //  [ 'id', 'fullName', 'email' ]
console.log(idd1)   //  [ 'firstName', 'lastName' ]

const idd2 = Object.values(regularName)
console.log(idd2)
console.log(Object.entries(regularName))    /* [
    [ 'id', '6735135' ],
    [ 'fullName', { firstName: 'Soumyajit', lastName: 'Koley' } ],
    [ 'email', 'soumya@gmail.com' ]
  ]  // gives arr within arr 1st index key 2nd index value
*/


// check if the property present or not...............

console.log(regularName.hasOwnProperty('fullName'))  // o/p ---> true
console.log(regularName.hasOwnProperty('lastName'))   // o/p --> false
