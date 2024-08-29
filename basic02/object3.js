// DESTRUCTURE OF OBJECT ..................

const cource = {
    name : "javascript tutorial",
    price : 999,
    teacher : "hitesh choudhury",
}

const {teacher : tech,price,name} = cource  // deconstruction
                    // can change variable name in short
console.log(name)
console.log(tech)
console.log(price)


// JSON ..........................

//atfirst values comes in form of xml structure now json

/*  {
    "name" : "soumya",
    "id" : 4248,
    "address" : "dhaniakhali"
}   */

// in json keys and values are all string 

// api from randomuser ----> jsonformatter