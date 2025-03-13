// Array


const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[0]); // we give the index value and then access the array elements 


// Array Method 

myArr2.push(6); // push is use to add value in the given aray on last index
myArr2.push(7);
//console.log(myArr2);
myArr2.pop();   // pop method is use to remove the elements on last index
//console.log(myArr2)
myArr2.unshift(9); // unshift method is use to add the value in the starting insex value
//console.log(myArr2)
myArr2.shift() ; // remove the array which is add to using unshift() method
//console.log(myArr2.includes(9));
//console.log(myArr2.indexOf(3));



//const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr)

// slice and splice

const myArr = [7,1,2,3,4,5,6]

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // slice method is return the value for example slice(1,3) there is 1 , 3 is index no of array and he is return the value of index value of 1, 2 and other value of array is removed
console.log("B ", myn1)

const myn2 = myArr.splice(1,3) // splice method is remove the element of array which give the index value for example splice(1,3) so his remove the value of index no is 1,2,3 and their space
console.log("C ", myArr)

