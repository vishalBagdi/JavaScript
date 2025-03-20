// ES6

// class user {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//        return `${this.username.toUpperCase()}`
//     }
// }

// const vishal = new user("naveen","vishal@gmail.com", "123" )


// console.log(vishal.encryptPassword());
// console.log(vishal.changeUsername());


// bhind the seen

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function (){
     return `${this.password}abc`
}

User.prototype.changeUsername = function (){
     return `${this.username.toUpperCase()}`
}

const bagdi = new User("Vishal", "vishal@example.com","123jhhg")
console.log(bagdi.encryptPassword());
console.log(bagdi.changeUsername());
