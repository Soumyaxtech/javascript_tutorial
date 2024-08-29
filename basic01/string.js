
// DECLEARATION OF ARRAY ...................
let name = "Soumyajit"
let id = 98765


const game = new String("Koley")  // Declearation


// OPERATIONS ON STRINGS................



console.log(game)
console.log(game.length)
console.log(game[0]) // RETURN 1ST INDEX OF STRING 
console.log(game.__proto__)     // GIVE PROTOTYPE
console.log(game.toLowerCase())    // TO GET LOWER CASE OF THE STRING
console.log(game.toUpperCase())    // TO GET UPPERCASE OF THE STRING

console.log(name+id)    // CONCATINATION BUT IT IS NOT GOOD 
console.log( `${name}${id}`)   // WE WILL USE IT 

console.log(game.charAt(4)) // give in the index what is the charecter

console.log(game.indexOf('e'))  // give index of the charecter

const sub = game.substring(0,4) // TO CREATE A SUBSTRING FROM STRING
console.log(sub)

const sliceString = game.slice(1,4)  // TO SLICE A STRING
console.log(sliceString)

const title = "koley"
console.log(title)
console.log(title.trim())   // To remove spaces from string

const address = "https:google@45:com"
console.log(address)
console.log(address.replace('@','%')) // TO REPLACE A PART FROM A STRING 
console.log(address.includes('koley'))
console.log(address.split(':')) // TO SPLIT STRING INTO ARRAY STRING