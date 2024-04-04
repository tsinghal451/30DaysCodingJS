// if

if (2 == "2") {
  console.log("exceuted"); // exceuted
}

if (2 === "2") {
  console.log("exceuted");
} else {
  console.log("not"); // not because isme humne === triple equal use kiya jo ki data types bhi check kr rha hai
}

const flow = 500;
if (flow < 1000) console.log("flow good"); // flow good

const balance = 1000;

if (balance < 500) {
  console.log(" less");
} else if (balance == 1000) {
  console.log("equal"); // equal
} else {
  console.log("graeter");
}

// switch case statement
const month = 3;
switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march"); //march
    break;
  default:
    console.log("many more");
    break;
}

/*
The Six Falsy Values in JavaScript:- 

false : The boolean value false .
0, -0 : The number zero.
"" or '' or `` : An empty string.
null : The null keyword, representing the absence of any object value.
undefined : The undefined keyword, representing an uninitialized value.
NaN : Stands for "Not a Number".
BigInt 0n : flasy value.

*/

/* 
that even empty arrays, objects, and functions are truthy.
truty values -> "0" , "false" ," " , [] , {} , function(){}
*/

const email = {};
if (Object.keys(email).length === 0) {
  console.log("empty"); // empty
}

// Nullish Coalescing Operator (??)

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = null ?? 10 ?? 20; // 10
console.log(val1);

// ternary operator

// condition ? true : false

const icetreeprice = 100;
icetreeprice >= 80 ? console.log("more than") : console.log("less than"); //more than
