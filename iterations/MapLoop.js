// for 

// ["", "", ""]
// [{},{},{}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello World!"
for (const gret of greetings) {
    
    //console.log(` Each char is ${gret}`);
    
    
}

// maps --> map is contain unique key , value if you are set duplicate value he does not contain

const map = new Map()
map.set('IN', "India")
map.set('US', "USA")
map.set('FR', "Franch")

//console.log(map);

for (const key of map) {
    console.log(key);
    
}
/* output  of this code 
    [ 'IN', 'India' ]
    [ 'US', 'USA' ]
    [ 'FR', 'Franch' ]

  his give the Array but i need key value pair

*/

for (const [key, value] of map) {
    console.log(key, '-:' , value);
    
}

/*  output this code 
      
     IN -: India
     US -: USA
     FR -: Franch
*/

const myObj = {
    'gameOne' : 'NFS',
    'gameTwo' : 'CRICKET',
    
}

for (const [key, value] of myObj) {
    console.log(myObj)
}  // output --> when we use forof loop then object are not iterable