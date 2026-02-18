// the == (loose equality) operator performs type conversion 
// (coercion) before comparison, while the === (strict equality)
//  operator does not, requiring both the value and type to be the same.

// if ( 2 == "2" ) {
//   //condition- true
//   console.log("yey!");
// }

const month=1
switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
    
    default:
        console.log("default");
        break;

}

//falsy values - false / 0 / -0 / BigInt 0n / "" / null / undefined / NaN
//truthy values - true / {} / 1 / "0" / 'false' / " " / [] / function(){} / 

//Nullish Coalescing Operator (??): null undefined
 let val1;
 val1 = 5 ?? 10
 val2 = null ?? 10 //checks null safety
 console.log(val1)
