// MEMORIES IN JAVASCRIPT ..................

//      TWO TYPES --> 1.STACK  2.HEAP

let name = "Soumyajit"
let anotherName = name
anotherName = "Babai"   // ALL PRIMITIVE DATATYPES STORED IN STACK MEMORY
console.log(name)       // SO ONLY CHANGE OF COPY OF NAME VARIABLE
console.log(anotherName)

const  userone={
    email: "user@google.com",
    id: 1235,
}
let usertwo = userone
usertwo.email="koley@google.com"
usertwo.id=31656
console.log(userone.email)
console.log(usertwo.email) // CHANGE IN MAIN VARIABLE AS STORED IN HEAP
console.log(userone.id)
console.log(usertwo.id)