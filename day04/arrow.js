const user = {
  username: "tushar",
  price: 4099,
  welcomeMsg: function () {
    console.log(`${this.username}, welcome to youtube`); // this keyword refer a current object
  },
};

user.welcomeMsg(); // tushar, welcome to youtube
user.username = "okii";
user.welcomeMsg(); // okii, welcome to youtube

// arrow function is annonomus function
//  annonomus function is used when do not use every time useally

const chai = () => {
  const username = "tushar";
  console.log(this.username); // undefined
};
chai();

/*
difference between arrow function and normal function 

Arrow functions, also known as fat arrow functions, were introduced in ES6 as a concise way of writing function expressions. They are a more modern and efficient way to write functions in JavaScript.
Here are some of the key differences between arrow functions and normal functions:

Syntax:
Arrow functions use a different syntax than normal functions. They use the => (arrow) operator to separate the parameters from the body of the function.

Conciseness:
Arrow functions are more concise than normal functions. They can be written in a single line, making them easier to read and write.

Lexical scope:
Arrow functions use the lexical scope of the surrounding code, while normal functions have their own scope. This means that arrow functions can access variables from the surrounding code without having to explicitly declare them.

this keyword:
Arrow functions do not have their own this keyword. Instead, they inherit the this keyword from the surrounding code. This can be helpful in situations where you need to preserve the context of the surrounding code.

arguments object:
Arrow functions do not have an arguments object. Instead, they use the rest parameter to collect all of the arguments passed to the function.

Constructor functions:
Arrow functions cannot be used as constructor functions.
*/

const addTwo = (num1, num2) => num1 + num2; // implict retrun
console.log(addTwo(3, 4)); // 7

const addTwo2 = (num1, num2) => num1 + num2; // () don't use return keyword
