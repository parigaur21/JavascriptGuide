//primitive::
// 7 types - string, number, bigint(large scientific values), boolean, null(khali), undefined(declare krdiya h pr value assign ni kri), symbol

//non-primitive or reference type::
// objects - arrays, functions, objects

//javascript is dynamically typed language - we don't have to specify data types while declaring variables, it automatically takes data type based on the value assigned to it.

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); //object

let hero = {
    name: "shaktiman",
    power: "light",
}

const myFunction = function() {
    console.log("this is my function");
}

//results:: 
//undefined - undefined
//null - object
//boolean - boolean
//number - number
//string - string
//symbol - symbol
//bigint - bigint
 

//for reference- [https://262.ecma-international.org/5.1/#sec-11.4.3]

 //Stack(primitive), Heap(non-primitive)
 let myName = "pari"
    console.log(myName); // "pari"
    myAName = myName; //copying the value of myName to myAName
    myAName = "parth"; //reassigning myAName to "parth"
    console.log(myName); // "pari"
    //In the above code, we declare a variable myName and assign it the value "pari". When we log myName, it outputs "pari". Then we reassign myAName to "parth" and log it again, which outputs "parth". This demonstrates that primitive values are stored directly in the variable and can be reassigned without affecting any other variables.
    console.log(myAName); // "parth"


