
const myobj = {}

myobj.name = "Tushar"
myobj.email = "hdbbsh@gmai.com"
myobj.age = 12

console.log(myobj.age); // 12
console.log(myobj["email"]); // hdbbsh@gmai.com

const anotherobj = {
    id : 3743857,
    fullname : {
        username: {
            name: "tushar",
            age: 44,
            phone: 4873345
        }
    }
}

console.log(anotherobj.fullname.username.name) // tushar
console.log(anotherobj.fullname.username.phone) //4873345

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3:"c" ,  4:"d"}

const obj3 = Object.assign({}, obj1 , obj2)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = {...obj1 , ...obj2} // spread operator
console.log(obj4); // // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const newobj = [
    {
        name : "tushar",
        no: 6783
    },
    {
        name : "tushar singhal",
        no: 6783434
    },
]

console.log(newobj[0].name) // tushar
console.log(newobj[1].name) // tushar singhal


console.log(myobj)
console.log(Object.keys(myobj)); // [ 'name', 'email', 'age' ] given in an array form
console.log(Object.values(myobj)); //[ 'Tushar', 'hdbbsh@gmai.com', 12 ] given values in an array
console.log(Object.entries(myobj)); // [ [ 'name', 'Tushar' ], [ 'email', 'hdbbsh@gmai.com' ], [ 'age', 12 ] ] assign seprately key and values in an arrays

console.log(myobj.hasOwnProperty('name2')); // false
console.log(myobj.hasOwnProperty('name')); // true -> hasOwnProperty check the key is present in array or a object or not


const course = {
    coursename : "js",
    courseproze : 499
}

const {coursename : course1} = course 
console.log(course1) // js
