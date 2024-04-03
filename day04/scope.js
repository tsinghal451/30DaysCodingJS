const a = 20;
{
  const a = 30; // 30
  console.log(a);
}
console.log(a); // 20

let b = 40;
var c = 30;
const d = 70;

if (true) {
  let b = 30;
  var c = 50;
  const d = 80;
}

console.log(b); // 40
console.log(c); // 50 var take a value from block scope
console.log(d); // 70

function one() {
  let name = "tushar";

  function two() {
    let name2 = "hitesh";
    console.log(name);
  }

  // console.log(name2);  // ReferenceError: name2 is not defined

  two();
}
one();

if (true) {
  const name = "tushar";

  if (name === "tushar") {
    const company = "youtube";
    console.log(name + company); // tushar youtube
  }
  // console.log(company);
}
// console.log(name); //ReferenceError: name is not defined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(4)); // 5
function addOne(num) {
  return num + 1;
}

console.log(addTwo(5)); //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(7)); // 9
