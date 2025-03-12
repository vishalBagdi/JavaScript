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



console.log( loginUserMessage()); // when you return the empty function then he return the undefined value
console.log( loginUserMessage("vishal"));