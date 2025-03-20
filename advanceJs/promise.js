// const promiseOne = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is completed");
//          resolve()
//     },2000)
// });
// promiseOne.then(function(){
//     console.log("promise is consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//        console.log("Async task two");
//        resolve()
//     },1000)
// }).then(function(){
//     console.log("Async two resolved");

// })

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "vishal", email: "vishal@example.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promisefour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Aman", email: "aman@exmple.com" });
//     } else {
//       reject("Error Something was wrong");
//     }
//   }, 1000);
// });

// promisefour
// .then((user)=>{
// console.log(user);
// return user.username

// })
// .then((username)=>{
// console.log(username);

// })
// .catch(function(error){
//     console.log((error));
// }).finally(()=> console.log("The promise either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Bagdi" , email : "bagdi@example.com"})
        }else{
            reject('Error : Bagdi went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
     try {
        const response = await promiseFive
     console.log(response);
     } catch (error) {
        console.log(error);
        
     }
     
}

consumePromiseFive()


// async function getallUser() {
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//    const data =  await response.json()
//    console.log(data);
//    } catch (error) {
//     console.log("E: ", error);
    
//    }
// }

// getallUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json()
}).then((data)=> {
console.log(data);

})
.catch((error) => console.log(error))
 
