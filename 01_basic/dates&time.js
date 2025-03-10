// Dates 

let mydate=new Date()
//console.log(mydate) // output is -->2025-03-10T11:04:08.172Z
//console.log(mydate.toString())  // output is --> Mon Mar 10 2025 16:36:17 GMT+0530 (India Standard Time)
//console.log(mydate.toISOString())  // output is --> 2025-03-10T11:07:50.272Z
//console.log(mydate.toJSON())  // output is --> 2025-03-10T11:07:50.272Z

//console.log(mydate.getFullYear()) // output is --> 2025
//console.log(mydate.getMonth())
//console.log( typeof mydate)  // output --> object

//let createdDate = new Date(2025, 11, 25) //  in js month will be started 0 to 11 
//let createdDate = new Date(2025, 11, 25, 5, 3) //  in js month will be started 0 to 11 

/* ***** when you create new date use this way
Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date */
//console.log(createdDate.toLocaleString());

//let createdDate = new Date("2025-01-26") // follw this method yy-mm-dd 

let createdDate = new Date("01-14-2025") // in india follow this method mm-dd-yyyy
//console.log(createdDate.getTime())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());
 //if we convert into seconds

 //console.log(Math.floor(Date.now())/1000 );

 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth() + 1);
 console.log(newDate.getDay());



 console.log(newDate.toLocaleString('default',{
    weekday : "long"
  }))
