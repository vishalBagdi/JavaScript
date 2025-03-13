// if

const isUserLoggedIn = true
const temperature = 41

// if(temperature < 50){
//     console.log("less then 50");
// }
// else
// console.log("temperature is greater then")


// <,>,<=, >=, == , ===, !==

// scope releated

// const score = 200

// if(score >100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

const balance = 1000

// if(balance>500) console.log("test");

// ******** nested if else *****

// if (balance < 500) {
//     console.log("less then 500")
//     } else if(balance <750){
//         console.log("less then 750")
//     } else if(balance <900){
//         console.log("less then 900")
//     } else{
//         console.log("less then 1200")
//     }


// how to use in real life coding

 const userLoggedIn = true
 const debitcard = true
 const userLoggedInFromGoogle = false
 const userLoggedInFromEmail = true


 if(userLoggedIn && debitcard){
    console.log("Allow to buy course");
 }

 if (userLoggedInFromEmail || userLoggedInFromGoogle) {
    console.log("User logged in");
 }