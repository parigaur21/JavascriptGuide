//singleton object var mySingleton = (function () {
    //instance stores a reference to the Singleton
//Object literals: |||| 

const sym = Symbol("mykey1"); //creating symbol
//creating method- constructor method 
const User = {
    name : "Parii",
    age : 22,
    location : "jaipur",
    [sym] : "mykey1",
    email : "parigaur@gmail.com"
}
// // console.log(User.name);
// // console.log(User.age);
// // console.log(User.location);
// console.log(User.email);
//    //OR

// // console.log(User["name"]);
// // console.log(User["age"]);
// // console.log(User["location"]);
// console.log(User["email"]); //much preferred because if we have full name as a category it will show error --> console.log(user.full name)X wrong!!!!.... Preferred is console.log(user[full name]) 
// console.log(User[sym]); //using symbol as a key
// Object.freeze(User); //to make the object immutable
// User.name = "Pari";
// console.log(User.name); //it will not change because we have frozen the object

console.log(User);

User.greeting = function() {
    console.log("Hello, welcome to the world of JavaScript!");
}

User.greeting2 = function() {
    console.log(`Hello, welcome to the world of JavaScript!, ${this.name}`);
    //this keyword refers to the current object, in this case, User
}


console.log(User.greeting());
console.log(User.greeting2());