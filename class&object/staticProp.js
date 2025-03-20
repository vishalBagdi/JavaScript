class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is : ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const vishal = new user("hitesh");
//console.log(vishal.createId());

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new teacher("iphone", "i@gmail.com")
iphone.logMe()
