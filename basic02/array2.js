const marvel_heros = ['thor','ironman','spiderman'];
const dc_heros = ['superman','flash','batman'];

//marvel_heros.push(dc_heros)  // we will not use it 
//console.log("a",marvel_heros)

const all_heros = marvel_heros.concat(dc_heros)
console.log("b",all_heros);

const three = [...marvel_heros,...dc_heros]        // mostly used as we can add as many
console.log(three)


let nnw = [1,2,3,4,[5,6,7],8,9,[10,11,12,[13,14]],15]

let real = nnw.flat(2) // here we have to give depth here depth 2 
console.log(real)

let koley = [3,6,7]
console.log(Array.isArray("90"))  // check if its a array
console.log(Array.isArray(koley))

console.log(Array.from("soumya"))   // it gives output [ 's', 'o', 'u', 'm', 'y', 'a' ]
let obj = {
    name : "babai",
    age : 23,
}

console.log(Array.isArray(obj))
console.log(Array.from(obj))    // gives empty array
console.log(Array.of(obj,90))   // gives output :  [ { name: 'babai', age: 23 }, 90 ]
