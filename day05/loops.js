for (let i = 0; i <= 10; i++) {
  const element = i;
  console.log(element);
}

for (let i = 0; i <= 10; i++) {
  console.log(" ");
  for (let j = 0; j <= 10; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}

// break and continue

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    console.log("detected");
    break; // break statement break the loop uske baad value aage print nhi hoti
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    console.log("detected");
    continue; // ek baar ke liye skip kr dege isme loop se bhar nhi aate
  }
}

// while loop

let index = 0;
while (index <= 10) {
  console.log(`value of index is ${index}`);
  index = index + 2;
}

let myArr = ["tushar", "singhal", "hello"];
let arr = 0;
while (arr < myArr.length) {
  console.log(`Value is ${myArr[arr]}`);
  // arr++
  arr = arr + 1;
}

// do while loop

let score = 0;
do {
  console.log(score);
  score++;
} while (score <= 10);
