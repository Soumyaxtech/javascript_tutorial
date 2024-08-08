//  DATE IN JAVASCRIPT.................

let myDate = new Date()
console.log(typeof myDate)  // O/P --> object
console.log(myDate) // O/P --> 2024-08-08T14:54:27.275Z
console.log(myDate.toString())  // O/P --> Thu Aug 08 2024 20:25:28 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())  // O/P --> Thu Aug 08 2024
console.log(myDate.toISOString())  // O/P --> 2024-08-08T14:58:27.246Z
console.log(myDate.toJSON())    // O/P --> 2024-08-08T14:58:27.246Z
console.log(myDate.toLocaleDateString())    // O/P --> 8/8/2024
console.log(myDate.toLocaleString())    // O/P --> 8/8/2024, 8:31:28 pm
console.log(myDate.toLocaleTimeString())    // O/P --> 8:32:15 pm

let createDate = new Date(2024,11,29,19,23,56)   // in javascript month starts from 0 --> jan
                                        // and 12 will be next year jan 
console.log(createDate.toDateString())  // Sun Dec 29 2024
console.log(createDate.toLocaleString())    // 29/12/2024, 7:23:56 pm

let date = new Date("2024-01-30")   // we can declear like this also
console.log(date.toLocaleString())
