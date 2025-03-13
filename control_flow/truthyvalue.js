const userEmail= []

if (userEmail) {
    console.log("got user email")
} else {
    console.log("did not match user email")
}

/* ##### falsy values

false, 0, -0, BigInt 0n, "", null, undefined, NaN  */

/* ******* truthy values ******

"0",  'false', " ", [], {}, function(){}  */

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty")
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
val1 = undefined ?? 15


console.log(val1);

/* @@@@@@@@@@ Terniary Operator

condition ? true : false  */

const icePrice = 100

icePrice <=80 ? console.log("les than 80") : console.log("more then 80");


