
// singleton

// object litrals

const mysum = Symbol("key1")


const jsUser = {

    name : "tushar",
    age : 18,
    [mysum] : "mykey2",
    email: "tsinghal341@gmail.com",
    isLogIn : false
}

console.log(jsUser.age) // 18
console.log(jsUser['email']); // tsinghal341@gmail.com
console.log(jsUser);


 // Object.freeze(jsUser) // freeze is used for no changes in objects 
jsUser.email = "tsihsdfh@gmail.com"
console.log(jsUser);

jsUser.greetings = function(){
    console.log(`hello my name is , ${this.name}`)
}

console.log(jsUser.greetings());
