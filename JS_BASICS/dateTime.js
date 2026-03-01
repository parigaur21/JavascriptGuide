//long-standing-date-time-formatting-library

// This library provides functions to format and manipulate date and time values in various formats.

let myDate = new Date();
console.log(myDate); // default iso string representation
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

//dd-mm-yyyy format me array 1 se starting index
let myDate1 = new Date(2023,0,23); // 23 January 2023
console.log(myDate1.toLocaleString());

let myDate2 = new Date("2023-01-14");
console.log(myDate2.toLocaleString());

let myDate3 = new Date("2023-01-14T10:20:30Z");
console.log(myDate3.toLocaleString());

let TDate= Date.now();
console.log(TDate);
console.log(myDate2.getTime());
console.log(Date.parse("2023-01-14T10:20:30Z"));
console.log(Math.floor(Date.now()/1000)); // current timestamp in seconds
console.log(Date.parse("2023-01-14T10:20:30Z")/1000); // timestamp in seconds for the given date

//getMonth, getDate, getFullYear, getHours, getMinutes, getSeconds
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());


myDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});


