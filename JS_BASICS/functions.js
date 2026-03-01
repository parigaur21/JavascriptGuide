// function sayName(){
//     console.log("P");
//     console.log("A");
//     console.log("R");
//     console.log("I");
// }
// sayName()

// //function definition - parameters
// function add(a,b){  //no need to give type
//     console.log(a + b);
// }


function add(a,b){  //no need to give type
    let res =a + b;   //let ka scope block-level hota h
    return res;
}
const res= add(3,null)
// console.log("Result: ",res); //undefined  
//shows NaN ( not a number) so, we have to pass arguments


function username(user){
    if(user === undefined){             //if(!user)
        console.log("please enter a username")
        return 
    }
    return `${user} just logged in.`
}
console.log(username("Pari")) //if we don't pass any value it returns undefined not null , but if we pass " " empty string gives o/p just logged in


function calculateCartprice(val1, val2, ...num1){ //... is called rest/spread operator
    return num1
}
console.log(calculateCartprice(200, 300, 400, 500))




