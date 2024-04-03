// functions

function add(number1, number2) {
  let result = number1 + number2;
  return result;
}
console.log(add(3, 4)); // 7

let ans = add(4, 8);
console.log(ans); // 12

function loginuser(username = "sam") {
  if (!username) {
    console.log("please logged in");
    return;
  }
  return `${username} just logged in`;
}

loginuser("tushar"); // nothing print but function will be call
let log = loginuser("tushar");
console.log(log); //tushar just logged in
console.log(loginuser()); // please logged in undefined but if we pass default value in parameter than it will print //sam just logged in always

function calculateCartPrize(...num1) {
  // ... this is a rest operator it helps to store vlaue in a bundle as a array

  return num1;
}

console.log(calculateCartPrize(200, 400, 3000)); // [ 200, 400, 3000 ]

const user = {
  username: "tushar singhal",
  price: 80,
};

function handleObjeect(anyobject) {
  console.log(
    `username is ${anyobject.username} and the price is ${anyobject.price}`
  );
}

handleObjeect(user); //username is tushar singhal and the price is 80

handleObjeect({
  username: "tanmay",
  price: 499,
}); // username is tanmay and the price is 499

const myNewArray = [200, 500, 300, 1000];

function WorkOnArray(getArray) {
  return getArray[2];
}

console.log(WorkOnArray(myNewArray)); // 300
console.log(WorkOnArray([300, 400])); // undefined
console.log(WorkOnArray([400, 300, 700, 20000])); //700
