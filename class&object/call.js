function SetUsername(username){
    // complex DB call
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this,username)

    this.email = email
    this.password=password
    
}

const chai = new createUser("naveen","naveen@email.com","naveen123")
console.log(chai);
