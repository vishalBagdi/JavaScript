// Primitive

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)
// Referance  (non-primitive)

// Array, objects, functions

// ** Array Example

const heros = ["shiktiman", "naagraj", "doga"]

// ### objects example

let myObj = {
    name: "vishal" ,
    age: 23
}

// @@@@@@ functions Example

const myFunctions = function(){
    console.log("hello World")
}

console.log(typeof outSidetemp)
console.log(typeof scoreValue)
console.log(typeof myFunctions)
console.log(typeof myObj)
console.log(typeof heros)
console.log(typeof id)