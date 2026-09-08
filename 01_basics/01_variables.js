const accountId =1144423
let accountEmail ="shivam@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2  not allowed


accountEmail = "ylv@gmail.com"
accountPassword = "769966"
accountCity = "benguluru"



/*
  prefer not to use var
  because of issue in block scope and function scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])