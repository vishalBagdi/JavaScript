const accountId = 1222
let accountEmail = "abcd123@gmail.com"
var accountPassword = "123897"
accountCity = "Jaipur"
accountState

console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

// accountId = 2 // not allowed

/*
Prefer not use var
because of issue in block scope and functional scope
*/


accountEmail = "abc.abc@gmail.com"
accountPassword = "222333"
accountCity = "nkt"

console.table([accountId, accountEmail, accountPassword, accountCity,])
console.log(accountState)
