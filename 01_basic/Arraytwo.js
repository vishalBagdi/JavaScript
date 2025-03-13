const marvel_heros = ["thoe", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

//const all_heros = marvel_heros.concat(dc_heros);
//console.log(all_heros.length);
//console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros)

const another_aray = [1,2,3, [4,5,6], 7, [6,7,[8,9,[10,11]]]]
const another_aray_real= another_aray.flat(Infinity)
//console.log(another_aray_real)
console.log(Array.isArray("vishal"))
console.log(Array.from("vishal"));  // a string converted into array using "from" method

console.log(Array.from({name : "vishal"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
