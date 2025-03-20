// we are talk about object literals

const user = {
    username : "vishal",
    loginCount : 8,
    signedIn : true,



    getUserDeatils : function(){
        //console.log("Got user deatils from database");
       // console.log(`username : ${this.username}`);
    //    console.log(this);
       
        
        
    }
}

console.log(user.username);
console.log(user.getUserDeatils());
console.log(this);
function User(username, loginCount, isLogedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLogedIn = isLogedIn

  //  return this
}

const userOne = new User("vishal",11,true)
const userTwo = new  User("bagdi",14,false)
console.log(userOne);
console.log(userTwo);


//importance of new keyword
// when we use new keyword his create a new empty object
// new keyword ke karn constructor function call hota hai
// this ke ander add ho jate hai 

