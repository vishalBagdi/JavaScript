const myObject = {
    js : 'JavaScripy',
    ts : 'TypeScripy',
    cpp : 'C++',
    rb : " ruby",
    swift : "Swift by apple"
}

for (const key in myObject) {
    //console.log(key) // print --> keys of the myObject
    //console.log(myObject[key]); --> // print  the value of myObject

    //console.log(`${key} shortcut is for ${myObject[key]}`) // print --> his print key and value both
    
}

const programming = ["js", "py", "ts", "java"]

for (const key in programming) {
    //console.log(key);// output--> his show the keys of arary ---> 0
/*0
  1
  2
  3
*/
    console.log(programming[key]); // output --> his print the value of array
    /* 
    output :

    js
    py
    ts
    java
    */
    

    
}