//let, var, const
/* {} is called scope::
with function or condition 
*/

let a = 100
const b = 300
var c = 200

if(true){   //block scope- var 
    let a = 10
    const b = 20
    var c = 30
}

console.log(a);
console.log(b);
console.log(c);

//console ke andr scope alg h or code environmentme node ke through run krenge vo alg h!!! aise 
