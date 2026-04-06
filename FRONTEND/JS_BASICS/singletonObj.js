// const tUser = new Object() //for singeton object we use new keyword

// const tUser ={} // object literal syntax for creating an object
// console.log(tUser);

// combining objects::
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// // const obj3 = {obj1, obj2} //object ke andr object
// //object assign - copies all ennumerable objects.
// const obj3= Object.assign({}, obj1, obj2) //if we have more than 2 arrays to merge rather than target, source..... to pehla target h baaki sb source h
// console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('isLogged')); //logged


//destructuring::
const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "parii"
}

const {courseinstructor: instruc} = course //by giving another name
console.log(instruc)     



//in react we use {} instead of destructuring
// const navbar = ({company}) => {

// }
// navbar({company: "pyRish"})


//values in json, json se API call
//api.github.com/user/parigaur21
//"name" : "pari" assigns key- value , string to string
//randomuser.me for api's
//json formatter tool for understanding api codes!!!!

[
    {},
    {},
    {}
]






