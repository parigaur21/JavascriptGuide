// const addTwo = (n, m) => {
//     return n+m
// }
// console.log(addTwo(3,4))



//IMPLICIT//
// const addTwo = (n, m) => n+m
// console.log(addTwo(3,4))



//(IIFE) - Immediately invoked function expression
//  -> function immediately invoke/execute hojae- global scope ke pollution ko htane k liye use kiye
//error if its not ending w ;

(function chai(){              //named
    console.log(`db connected`)
})();  


( () => {                      //un-named
    console.log(`db connected`)
})();  

( (name) => {                  //pass parameters
    console.log(`db connected to${name}`)
})("pari"); 

