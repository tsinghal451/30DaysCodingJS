//  object oriented programming 

/* 
object:-
collection of properties and methods
toLowerCase
*/


// object literls
const user = {
    name : "tushar",
    loginCount : 8,
    signedIt: true,

    getUserDetails: function(){
        console.log("get user details");
        console.log(this)
    }
}
console.log(user.name); // tushar
console.log(user.getUserDetails); //[Function: getUserDetails]
console.log(user.getUserDetails()); // get user details
console.log(this); // {}

 // constructor function
 /* 
 A constructor function in JavaScript is a special type of function 
 that is used to create and initialize objects. 
 It is typically used in object-oriented programming to define and create
multiple instances of objects with similar properties and methods.
 */


function User(name , isLogin , LoginCount ){
    this.name = name;
    this.isLogin = isLogin;
    this.LoginCount - LoginCount;
    
    return this

}

const userOne = console.log(User("tushar" , true , 34));
const userTwo = console.log(User("Him" , false , 56));
console.log(userOne); // overwrite the value islye hume new fuction use krna pdega jisse value overight naa hoo


const userOne1 = new User("tushar" , true , 34);
const userTwo2 = new User("Him" , false , 56);
console.log(userOne1); // abb value overright nhi ho rhi hai