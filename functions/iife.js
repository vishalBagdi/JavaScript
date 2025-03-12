// Immediately Invoked Function Expressions (IIFE)

(function connectDB() {

    // named IIFE
    console.log(`DB CONNECTED`)
})();

/* 
Question : what is IIFE
Answer --> globale scope ke poulition se problem hoti kai baar to us globle scope ke variables ya decrelation  ke pollutions ko hatane ke liye iife ko use kiya jata hai
IIFEs are often used to create local scopes to avoid polluting the global namespace. 
*/

( (name) => {
    console.log(`DB CONNECTED two ${name}`)
} )('vishal')