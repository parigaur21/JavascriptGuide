let score = "33";
console.log(typeof score); //number
console.log(typeof score); //number

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); //string

let str1 = "hello";
let str2 = "world";
let fullString = str1 + " " + str2;
console.log(fullString); // "hello world"

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" - 2); // -1
console.log(1 + "2" + 1); // "121"
// In the first case, the number 2 is converted to a string and concatenated with "1" to produce "12". In the second case, the string "1" is converted to a number and then subtracted by 2, resulting in -1.
console.log(+true); // 1
console.log(+false);
// In JavaScript, the unary plus operator (+) can be used to convert a boolean value to a number. When applied to true, it converts to 1, and when applied to false, it converts to 0. Therefore, +true evaluates to 1, and +false evaluates to 0.
console.log(+""); // 0
// In JavaScript, the unary plus operator (+) can also be used to convert an empty string ("") to a number. When applied to an empty string, it converts to 0. Therefore, +"" evaluates to 0.

let x, y, z;
x = y = z = 5 + 5;
console.log(x, y, z); // 10 10 10
//don't write such confusing code, readability is important.

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101
gameCounter--;
console.log(gameCounter); // 100

//https://developer.mozilla.org/en-US/docs/Web/JavaScript

//comparison operators
console.log(3 > 2); //true
console.log(3 < 2); //false
console.log("03" >= 2); //true
console.log(3 <= 2); //false
console.log(3 == "3"); //true
console.log(3 === "3"); //false
console.log(3 != "3"); //false
console.log(3 !== "3"); //true

//interesting cases::
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// In JavaScript, the behavior of null in comparison operations can be a bit tricky. When comparing null to a number, it is treated as 0. Therefore, null > 0 evaluates to false because 0 is not greater than 0. However, null >= 0 evaluates to true because 0 is equal to 0. The equality operator (==) does not consider null equal to 0, so null == 0 evaluates to false.

//same with undefined
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
console.log(undefined < 0); //false
// In JavaScript, undefined is not treated as a number in comparison operations. Therefore, when comparing undefined to a number, it does not convert to 0 like null does. As a result, all comparisons involving undefined and a number will evaluate to false. This is why undefined > 0, undefined == 0, undefined >= 0, and undefined < 0 all evaluate to false.

