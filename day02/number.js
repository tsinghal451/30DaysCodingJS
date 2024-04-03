const numbers = 4000000000;

console.log(typeof numbers);

const newno = numbers.toString(); // to convert into string
console.log(typeof newno);

console.log(numbers.toFixed(1)); // to get a fixed amount of value after point (round figure)

console.log(numbers.toLocaleString("en-IN")); // 4,00,00,00,000

// +++++++++++++++++++++++ Maths +++++++++++++++++++++

const value = -448;

console.log(Math.abs(value)); // to convert negative to positive numnber
console.log(Math.round(48.6)); // to get a round figure number
console.log(Math.ceil(48.1)); // to get a always upper no
console.log(Math.floor(48.6)); // to get a alwys down no
console.log(Math.min(2, 4, 5, 6)); // to find a minimum value
console.log(Math.max(34, 5, 3, 2)); // to find maximum value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // random funtion is used for get a random value
console.log(Math.floor(Math.random() * max)); // random funtion is used for get a random value
