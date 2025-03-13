 const coding = ["js", "py", "ts", "java", "ruby", "cpp"]

 /* coding.forEach( function (item) {
  console.log(item);
  
 } )  
 
 output --> using  function function name is function (item)
js
py
ts
java
ruby
cpp

 
 */

/* coding.forEach( (item) => {
console.log(item)
}  )

output --> using  arrow  function  how to write arroe function  "() => {}"

js
py
ts
java
ruby
cpp


*/


// ########### another way
function printMe(item){
    //console.log(item);
    
}
/* output -->  
js
py
ts
java
ruby
cpp


*/

coding.forEach(printMe)

coding.forEach( (item, index, arraylist) => {
  console.log(item, index, arraylist);
  
} )

/* output --->
item  index    arraylist -->  this is written by programmer
js     0      [ 'js', 'py', 'ts', 'java', 'ruby', 'cpp' ]
py     1      [ 'js', 'py', 'ts', 'java', 'ruby', 'cpp' ]
ts     2      [ 'js', 'py', 'ts', 'java', 'ruby', 'cpp' ]
java   3      [ 'js', 'py', 'ts', 'java', 'ruby', 'cpp' ]
ruby   4      [ 'js', 'py', 'ts', 'java', 'ruby', 'cpp' ]
cpp    5      [ 'js', 'py', 'ts', 'java', 'ruby', 'cpp' ]

*/


const myCoding = [
    {
        languageName : "JavaScript",
        languageFile : "js"
    },
    {
        languageName : "Java",
        languageFile : "Java"
    },
    {
        languageName : "TypeScript",
        languageFile : "ts"
    }
]

myCoding.forEach ( (item) => {
  console.log(item.languageFile)
} )
