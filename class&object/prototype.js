let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "harmer",
    spiderman : "Sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.vishal = function(){
    console.log(`vishal is present in all subject`);
    
}
Array.prototype.heyvishal = function(){
    console.log(`vishal says hello`);
    
}
// heroPower.vishal()
// myHeros.vishal()
// myHeros.heyvishal()
// heroPower.heyvishal()


// inheritance
const User = {
    userName : 'vishal',
    email : "vishal@google.com"
}

const Teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__:teachingSupport
}
Teacher.__proto__=User

// modern syntax
Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUsername = "chaiaurcodeisthat         "
String.prototype.trueLength = function(){
    // console.log(`${this.name}`);
    // console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()

"vishalBagdi".trueLength()
"iceTea".trueLength()