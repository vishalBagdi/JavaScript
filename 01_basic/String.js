const name  = "abcd"
const repoCount = 40

//console.log(name +  repoCount + " value")

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// another way to declare string 

const gameName = new String('vishalbagdi-vb')
//console.log(gameName[0])
//console.log(gameName.__proto__); // show the object for single character for example the output is a {}

//console.log(gameName.length);  // The length property returns the length of a string:
//console.log(gameName.toUpperCase()); // convert string into the UpperCase
//console.log(gameName.charAt(2));// The charAt() method returns the character at a specified index (position) in a string:
const newString = gameName.substring(0,4); //The difference is that the second parameter specifies the length of the extracted part
//console.log(newString)
const anotherstring = gameName.slice(2,9);// in this method we put the negative number and string count the revise
//console.log(anotherstring)

const newStringOne = "     vi   ";
console.log(newStringOne.trim()); // remove the spaces in the string using trim function

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
// console.log(url.replace('www', 'yyy'))
// console.log(url.includes('www'))

// console.log(gameName.split("-")) // separate the string is based on seprator