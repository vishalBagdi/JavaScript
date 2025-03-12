const user = {
    username : "vishal",
    price : 999,

    welcomeMessage : function(){
        console.log(` ${ this.username} , welcome to website`); // here this keyword is refer tocurrent context
         console.log(this)
    }
   
}

// ---------- in the browser globle object is the window 

// user.welcomeMessage()
// user.username = "same"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "vishal"
//     console.log(this.username);
// }

// chai();

// const chai = function() {
//     let username = "vishal"
//     console.log(this.username);
// }

const chai = () => {
    let username = "vishal"
    console.log(this);
}

//chai()

// ########## BASIC ARROW FUNCTION #########

// const addTwo =  (num1, num2) => {
//     return num1 + num2

// }
// console.log(addTwo(4,3))

// @@@@@@@@@ implicit return @@@@@@@

/*    const addTwo =  (num1, num2) =>  num1 + num2

console.log(addTwo(4,3)) */


 /* const addTwo =  (num1, num2) =>  (num1 + num2)  // when we use this () brackets we did not use to return keyword and if we want to use this {} bracket we should use the return keyword


console.log(addTwo(4,3)) */

// $$$$$$$$$ WHEN WE RETURN THE OBJECT THEN 

const addTwo =  (num1, num2) =>  ({username: "vishal" }) // when we return the obect then we should use the both brackets for example ({username: "vishal" }) 

console.log(addTwo(4,3))