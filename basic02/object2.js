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

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
