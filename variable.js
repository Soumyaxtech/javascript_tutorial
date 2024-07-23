const accountId = 144553
let accountEmail = "soumya@google.com"
var accountPassword = "1364365"
accountCity = "kolkata"
let accountState
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])
accountCity = "Patna"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])