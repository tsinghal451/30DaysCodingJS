// filters

const coding = ["js", "c++", "ruby", "go"];

// for each kuch bhi return nhi krta hai bs undefined return krdeta hai

const values = coding.forEach((item) => {
  // console.log(item)
  return item;
});
// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6];

const newNums = myNums.filter((num) => num > 1);
console.log(newNums);

const newNum = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNum.push(num);
  }
});
console.log(newNum);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

const newNo = myNums.map( (nums) => {return nums +  1})
console.log(newNo);


const newNums1  = myNums
.map( (nums) => (nums * 10))
.map( (nums) => nums+1)
.filter( (nums) => nums >= 40)
console.log(newNums1);

const arr1 = [1,2,4,5,6]

const sumreduce = arr1.reduce( (acc, currval) =>  { // higher order function
  console.log(`acc ${acc} and currval ${currval}`);
  return acc + currval
} , 0 )
console.log(sumreduce); // 18


const obj1 = [
  {
     itemname: "js",
     price : 499
  },
  {
    itemname: "css",
    price : 4999
 },
 {
  itemname: "c++",
  price : 4990
}]

let objReduce = obj1.reduce( (acc , currval ) => currval.price + acc ,0 )
console.log(objReduce);

