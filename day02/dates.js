//  Dates
let date = new Date()

console.log(date.toString()) // Tue Apr 02 2024 07:58:07 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); //Tue Apr 02 2024
console.log(date.toISOString()); //2024-04-02T07:59:09.649Z
console.log(date.toLocaleDateString()); //4/2/2024
console.log(date.toLocaleTimeString()) //8:00:05 AM
console.log(date.toLocaleString()); // 4/2/2024, 8:01:17 AM


let mydate = new Date(2024, 0, 24)
console.log(mydate.toDateString()); // Wed Jan 24 2024


let newdate = new Date()
console.log(newdate); // 2024-04-02T08:10:55.871Z
console.log(newdate.getDay()); // 2
console.log(newdate.getFullYear()); // 2024



 console.log(newdate.toLocaleString('default' , {
    weekday: "long" // Tuesday
 }))