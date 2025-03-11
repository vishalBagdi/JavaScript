//singleton
// Object.create

// object  literals

const mySym = Symbol("key")

const JsUser = {
    name : "vishal",
    "full-name" : "Vishal bagdi",
    age: 18,
    location : "jaipur",
    email: "vishal@gmail.com",
    isLoggedIn: false,
    lastLoggedIn : ["Monday", "Saturday"],
    [mySym]: "key"
}
//console.log(JsUser)
//console.log(JsUser["email"])
// console.log(JsUser["full-name"])
// console.log( typeof JsUser[mySym])

//Object.freeze(JsUser)

JsUser.email = "bagdi@vishal.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello.js");
}
//console.log(JsUser.greeting)

JsUser.greetingTwo = function(){
    console.log(`hello user, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())