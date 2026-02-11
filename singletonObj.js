// const tUser = new Object() //for singeton object we use new keyword

// const tUser ={} // object literal syntax for creating an object
// console.log(tUser);

// combining objects::
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} //object ke andr object
//object assign - copies all ennumerable objects.
const obj3= Object.assign({}, obj1, obj2) //if we have more than 2 arrays to merge rather than target, source..... to pehla target h baaki sb source h
console.log(obj3);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('isLogged'));

