function sayMyName(){
    console.log("V");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}

//sayMyName()

// function addTwoNumbers(number1, numbers2){   // number1 and number2 is parameters
//     console.log(number1 + numbers2);
// }

function addTwoNumbers(number1, numbers2){   // number1 and number2 is parameters
    let result = number1 + numbers2;
    return number1 + numbers2;  
    console.log(abc) // after return then write th code is never execute 
    
}
const result = addTwoNumbers(5,7) // 5 and 7 is arguments
// console.log( "Result : ", result)

function loginUserMessage(username = "sam"){
    if( !username){
      console.log("please enter the username");
      return
    }
    
    return `${username} just logged in`
}



// console.log( loginUserMessage()); // when you return the empty function then he return the undefined value
// console.log( loginUserMessage("vishal"));

// function calculateCartPrice(...num1){  // ... there are three dots that is call Rest operator and Spread Operator thai is call rest and spread for their use cases 
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 600,700));


function calculateCartPrice( val1, val2, ...num1){  // ... there are three dots that is call Rest operator and Spread Operator thai is call rest and spread for their use cases 
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 600,700)); // output is val1 is taken 200, val2 is taken 400, and rest value is printed 

// ********* how to object pass in the function ******

const user = {
    username : "vishal",
    price : "199"
}

 function handleObject(anyObject){
 console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
 }

 //console.log(handleObject(user))

 handleObject({
    username : "sam",
    price: 399
 })

 // ******* how to function is pass in the array

 const mynewArray = [200, 400, 500, 700];

 function returnArrayg(getArray){
   return getArray[1];
 }

 console.log(returnArrayg(mynewArray));