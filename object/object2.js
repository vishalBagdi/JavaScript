//const tinder = new Object() // singleton object hai
const tinderUser = {} // this is not singleton object hai

tinderUser.id = "abc123"
tinderUser.name = "same"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

const regularUser = {
    email : "same@gmail.com",
    fullname : {
        userfulName : {
            FirstName : "vishal",
            Lastname : "Bagdi"

        }

    }
}

//console.log(regularUser.fullname.userfulName.FirstName)
//console.log(regularUser.fullname.userfulName.Lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
//const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3)
const obj4 = {...obj1 , ...obj2, ...obj3}
//console.log(obj4)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    
]
//  console.log(users[1].email)
//  console.log(tinderUser)

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));
//  console.log(tinderUser.hasOwnProperty('isLogged'));


 // ********** Object de-structure ******

 const course = {
    courseName : "js",
    price : "999",
    courseInstructor : "vishal"
 }
// console.log(course.courseInstructor)

const {courseInstructor : instructor}= course
console.log(courseInstructor);