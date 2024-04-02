const name = "Tushar"
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}.`);
// output :- hello my name is Tushar and my repo count is 50.

const gameName = new String('Tushar')

console.log(gameName[0]); // T

console.log(gameName.length); // to fing the length 
console.log(gameName.charAt(2)); // to find the position of character 
console.log(gameName.toUpperCase()); // TUSHAR 
console.log(gameName.toLowerCase()); // tushar
console.log(gameName.indexOf('T')); // to the position of character 
console.log(gameName.substring(0,4)); // to get specific char to start point to end point
console.log(gameName.slice(0, -4)); // in slice we can use negative value also to get reverse char

const newstring = "     Tushar    "
console.log(newstring.trim()); // to remove the extra spaces

const url = "https://TusharSinghal%38/home.com"

console.log(url.replace('%38', '-')); // to replace the char to any other char 