
let a = 300 // here is let a is global scope

if(true){
    let a = 10; // here is let a is block scope 
    const b = 20;
    var c = 30;
    console.log("inner : ", a)
}

 console.log(a);
//console.log(b);
//console.log(c);
const array = [100, 300,400] ;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}