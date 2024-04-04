// forOf
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = "hello World";
for (const greet of greetings) {
  console.log(greet);
}

// Maps :- duplicate value nhi hoti , key pairs pe kaam krta hai

const map = new Map();
map.set("in", "INDIA");
map.set("usa", "UNITED STATES");

console.log(map);

for (const [key, value] of map) {
  console.log(key, value);
}

const myObj = {
  game1: "nfs",
  game2: "pubg",
};

// for(const [key,value] of myObj){ // object are not iterable with the for of loop
//     console.log(key,value)
// }

// forIn loop
for (const key in myObj) {
  console.log(`${key} shorcut is for ${myObj[key]}`);
}

const program = ["js", "css", "html"];
for (const key in program) {
  console.log(key, program[key]);
}

// array -> for OF
// object -> for in

// For Each
const coding = ["js", "css", "html", "c++"];
coding.forEach(function (items) {
  // foreach meh function lete hai jiska koi naam nhi hota
  console.log(items);
});

coding.forEach((val) => {
  // arrow function
  console.log(val);
});

function printme(items) {
  console.log(items);
}
coding.forEach(printme);

coding.forEach((item, index, arr) => {
  // parameter use in forEach
  console.log(item, index, arr);
});

const myCoding = [
  {
    langaugeName: "javascript",
    langaugeFileName: "java",
  },
  {
    langaugeName: "c++",
    langaugeFileName: "java",
  },
  {
    langaugeName: "html",
    langaugeFileName: "java",
  },
];

// console.log(myCoding);

myCoding.forEach((items) => {
  console.log(items.langaugeFileName, items.langaugeName);
});
