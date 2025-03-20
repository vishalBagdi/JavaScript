class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course is added by ${this.username}`);
        
    }
}

const vishal = new Teacher("vishal","vishal@gmail.com", "123456")
console.log(vishal);
vishal.addCourse()

const bagdi = new User("bagdi")
console.log(bagdi);
bagdi.logMe()
vishal.logMe()
console.log(vishal instanceof User);

