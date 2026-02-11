//arrays:: 
//arrays are a data structure that can hold multiple values.

const myArray = [0, 1, 2, 3, 4];
//resizable, can hold different types of data, ordered collection of items, zero-based index
// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[5]);
// myArray[1] = "changed value";
// console.log(myArray);
// myArray.push("new value");
//shallow copy - whose property shares same reference point, change in original array will affect the copied array
// const myArrayCopy = myArray;
// myArrayCopy[0] = "changed value in copy";
// console.log(myArray);
// console.log(myArrayCopy);
// //deep copy - creates a new array with the same values, change in original array will not affect the copied array
// const myArrayDeepCopy = [...myArray];
// myArrayDeepCopy[0] = "changed value in deep copy";
// console.log(myArray);
// console.log(myArrayDeepCopy);
// myArray.pop();
// console.log(myArray);
// myArray.unshift(9);   //kind of opposite to push, adds an element at the beginning of the array
// console.log(myArray);
// myArray.shift();   //kind of opposite to pop, removes the first element of the array
// console.log(myArray);
// myArray.splice(2, 2, "new value");  //splice(start index, number of elements to remove, elements to add)
// console.log(myArray);
// console.log(myArray.includes(5)); // returns true if the array contains the specified element, otherwise false
// console.log(myArray.indexOf(2));
// const newArray = myArray.join(); //join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
// console.log(newArray);


// //array methods: push, pop, shift, unshift, splice, includes, indexOf, join
// //slice() vs splice()
// // console.log("A" , myArray);
// // const na1 = myArray.slice(1, 3); //slice(start index, end index) - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// // console.log(na1);

// console.log("B", myArray);
// const na2 = myArray.splice(1, 3); //splice(start index, number of elements to remove) - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// console.log("C", myArray);
// console.log(na2);
//   //original array ko manipulate karta h splice() jo values denge use htakr baaki array wps krdega jaise
//   //{[1,2,3,4,5] hh array splice(1,3) krne pr [1,5] wps krega pr array manipulate hojaega jo ki
//   // [1,2,3] hojaega}

//   //slice() array manipulate nahi karta h, original array ko wps krta h, splice() array manipulate karta h, original array ko wps nahi krta h!!!
//   //concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray = arr1.concat(arr2);
// console.log(mergedArray);

//  const arr3 = [...arr1, ...arr2]; //spread operator is used to spread the elements of an array into a new array
//  console.log(arr3);



//  console.log(Array.isArray(arr1)); //returns true if the object is an array, otherwise false
//  console.log(Array.isArray({})); //returns false
//  console.log(Array.from("Parii")); //creates a new array from an array-like or iterable object
//  console.log(Array.from({length: 5}, (_, i) => i)); //creates an array of length 5 with values from 0 to 4
 


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1, score2, score3)); //creates a new array from a variable number of arguments, regardless of number or type of the arguments 
  