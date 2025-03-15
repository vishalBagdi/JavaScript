const myNums = [1,2,3]
// ######### reduce using function
/* const myTotel = myNums.reduce(function (acc , curval) {
    console.log(`acc : ${acc} and currentvalue : ${curval}`);

return acc + curval

}, 3 )
console.log(myTotel); */

//  ********* reduce using arrow function

const myTotel = myNums.reduce( (acc , curval) => {return acc + curval},0 )
console.log(myTotel)

const shoppingCart = [
    {
        itemName : "js course",
        price : 2199
    },
    {
        itemName : "ts course",
        price : 2399
    },
    {
        itemName : "py course",
        price : 2499
    },
    {
        itemName : "ruby course",
        price : 2599
    },
    {
        itemName : "go course",
        price : 199
    },
    {
        itemName : "cpp course",
        price : 499
    },
    {
        itemName : "native course",
        price : 599
    },
]

 const priceTopay = shoppingCart.reduce( (acc, item) => { return acc + item.price },0)
 console.log(priceTopay);
 
