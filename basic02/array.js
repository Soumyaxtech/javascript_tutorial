let arr = ["soumya",34,78,"koley"]

console.log(arr.length)     // give length of array ........
console.log(arr[3])     // print element of array..........

arr.push("babai")   // push element in array at end .......
console.log(arr)
arr.push(576)
console.log(arr)
arr.pop()       //  remove element from last index of array.........
console.log(arr)

arr.unshift(45) // add element in 1st place as for this 
                // we have to change all elements index (time consuming)
console.log(arr)
arr.shift()     // remove 1st element from arr
console.log(arr)

console.log(arr.includes(4765))     // check if the element present or not 
                                // if present then true or else false
console.log(arr.indexOf("soumya"))  // give index value of element  

let myArr = arr.join()      // convert arr into string 
console.log(arr)
console.log(myArr) 


