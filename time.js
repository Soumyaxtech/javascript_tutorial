let date = new Date(2024,7,8)
console.log(date.getTime())
let myTimeStand = Date.now()
console.log(myTimeStand)    // give recent time in millisec from 1971 to now 
console.log (Math.round((myTimeStand/1000))) // remove decimal value of time
                    // devide 1000 for milli to sec

let now = new Date()
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getMonth())
console.log(now.getFullYear())
console.log(now.toLocaleString('default',{
    weekday : "long",
    hour : "2-digit"
}))
console.log(now.setDate(2000,5,23))
