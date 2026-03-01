// // //let, var, const
// // /* {} is called scope::
// // with function or condition 
// // */

// // //accessibility 
// // let a = 100
// // const b = 300
// // var c = 200

// // if(true){   //block scope- var 
// //     let a = 10
// //     const b = 20
// //     var c = 30
// // }
// // //examples
// // console.log(a);
// // console.log(b);
// // console.log(c);

// // //console ke andr scope alg h or code environmentme node ke through run krenge vo alg h!!! 

// //child function can access the parent function!!!
// function one(){
//     const userName = "Pari"

//     function two(){
//         if(true){
//             const username = "Pari"
//             if(username === "Pari"){
//                 const website = "yt"
//                 console.log(userName + website);
//             }  
//         }
//         // const website = "yt"
//         // console.log(userName);
//     }
//     // console.log(website);
//     // two()
// }
// // one()


console.log(addOne(5))
function addOne(num) {
	return num + 1;
}

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))          //hoisting- how to declare and treat variables

// we can't use addTwo(5) before function bcz we are assigning the value of function to it.. further explained in hoisting!!!!


