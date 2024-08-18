// object can be decleared 2 types
// singleton : object is declear like constructor
    // Object.create()  // singleton 
// not singleton : object is decleared like literals

// OBJECT LITERALS ............................

const mySym = Symbol("key1")
const obj = {
    name : "soumya",
    greeting : function(){
        console.log("hello user ") 
    },
    age : 23,
    "myFile" : "data",
    email : "soumya@google.com",
    loggedIn : false,
    lastLoggedIn : ["monday"],
    [mySym] : "mykey1" ,   // syntax for writing symbol in obj 
}

console.log(obj.name)
console.log(obj["myFile"])  // another way to access object
console.log(obj["name"])
console.log(obj[mySym])

obj.email = "soyumya@facebook.com"
console.log(obj.email)
//Object.freeze(obj)      // it freezes the object so no further update possible
obj.email = "soumya@instra.com"
console.log(obj.email)
console.log(obj.greeting());

obj.greetingTwo = function(){   // can declear function here if object not freezed
    console.log(`hello user, ${this.name}`) // if we want to access anoter key 
}                                   // of the object in the function do this 
console.log(obj.greetingTwo())


