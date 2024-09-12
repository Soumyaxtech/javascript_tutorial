let a = 490
var b = 900
if(true){
    let a=10
    var b=20
    console.log("inner value",a)    // gives o/p 10 as in block scope value is 10
}
//console.log(b)  // it will give o/p 20 which is not right as 
                // block scope values valid in the block scope only
                // so we avoid var for this
                                
                
//console.log(a)     // o/p ---> 490 as in global scope value assigned 490


// NESTED SCOPE IN JAVASCRIPT.....................

function one(){     // GLOBAL SCOPE 
    const user = "Soumya"
    function two(){     // LOCAL SCOPE
        const id = 476538798    // here two is local scope 
        console.log(user)       // can access user as local scope can access
                                // global scope variables
    }
    //console.log(id)     // can't access id as it is decleared in local scope 
    two()
}
one()   // first here one function called then inside the one function
        // at line 26 two called then inside two user is printed 

// ANOTHER EXAMPLE OF NESTED SCOPE ......................................

if(true){
    const name = "babai"
    if(name==="babai"){
        const gender = " male"
        console.log(name + gender)
    }
    // console.log(gender)     // cant access local scope outside it
}

// +++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++

console.log(addOne(6)) // here can print both even decleared after it
function addOne(num){
    return num+1
}
console.log(addOne(6))

// console.log(addTwo(6))  // cant print this as not decleared 
const addTwo = function(num){   // basic of hosting
    return num+2
}
console.log(addTwo(7))