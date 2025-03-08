// Stack (primitive) ---> give the copy of value
// heap (non-primitive) --> give the referance of the value 


let myYoutubename = "vishalbagdi.com"
let anothername = myYoutubename;
anothername = "chai aur code"
console.log(anothername)
console.log(myYoutubename)

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "vishal@google.com"
console.log(userOne.email)
console.log(userTwo.email)