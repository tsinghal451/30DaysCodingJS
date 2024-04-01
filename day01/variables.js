const accountId = 345858

let accountName = "Tushar Singhal"
var accountEmail = "tsinghal@gmail.com"
accountCity = "jaipur"
let accountState // empty variables always undefined


// try to change the value of variables

//  accountId = 67349
accountName = "tanmay"
accountEmail = "dfd@gamil.com"
accountCity = "bangluru" 

/*
I perfer do not use var 
because var gives a issues  in block scope  and functioanl scope 
*/

console.log(accountId);

// console.table is a second method to show the output of all variable in a one table 
console.table([accountId , accountEmail, accountName , accountCity , accountState])