console.log("Hello, Chai!");
//nodejs , denojs- javascript runtime environment
const accountId = 144678;
let accountEmail = "paru@gmail.com";
var accountpassword = "12345";
accountCity = "Bangalore";

// accountId=23456;
console.log(accountId);

let accountState;
accountState = "Karnataka";
console.table([
  accountId,
  accountEmail,
  accountpassword,
  accountCity,
  accountState,
]);

// let vs var vs const
//let and var are used to declare variables, but they have different scoping rules.
//let is block-scoped, meaning it is only accessible within the block it is defined in, while var is function-scoped, meaning it is accessible throughout the entire function it is defined in.
//const is used to declare constants, which are variables that cannot be reassigned after they are initialized. It also has block scope like let.

("use strict"); //treat all js code as modern js
pi = 3.14;
console.log(pi);
// alert("hello");    //for browser only

// Data types::
// number - 2 to power 53
// BigInt - for larger integers
// string - sequence of characters
// boolean - true or false
// undefined - variable declared but not assigned a value
// null - represents the intentional absence of any object value
// symbol - a unique and immutable primitive value

//objects
console.log(typeof accountId);
console.log(typeof null);   //object
console.log(typeof undefined);  //undefined
