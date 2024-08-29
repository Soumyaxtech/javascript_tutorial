function addition(num1,num2){
    let result = num1 + num2
    return result
}

console.log("result will be : ",addition(4,7))
// OR DO THIS ------------->

const res = addition(4,7)
console.log( "here result will be : ",res)


function loggedIn(user="sam"){  //  default user set then no need of if statement here
    if(user==undefined){    // if no argument pass 
        console.log("enter user name ")
        return
    }
    return `${user} is logged in `;
}

console.log(loggedIn())


// SHOPING CART ...........................
// REST OPERATOR...............

function shopCart(... num1){    // ... is rest operator
    return num1;
}

console.log((shopCart(2020,67,345)))    // returns a array of price


// OBJECT HANDELING WITHIN FUNCTION .............................

const bio = {
    user : "koley",
    id : 13569809,
}
function obj(anyObj){
    return `name is ${anyObj.user} id is ${anyObj.id}`;
}

console.log((obj(bio)))
//OR
console.log((obj({
    user : "koley",
    id : 13569809,
})))

// ARRAY HANDLING IN FUNCTION................................

const myArray =[23,89,100]

function arrayElement(anyArray){
    return anyArray[2];
}

console.log(arrayElement(myArray))
//     OR

console.log(arrayElement([23,89,100]))