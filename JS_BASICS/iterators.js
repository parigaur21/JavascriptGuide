//for loop

// for(i=0; i<=10; i++){
//     for(j=0; j<=10; j++){
//     console.log(i +'*'+ j + '=' + i*j)
//     }
// }

// for(let index=1; index<=20; index++){
//     if(index == 5){
//         console.log("detected");
//         break    //will print till 4 and then detected
//     }
//     console.log(`value of i is ${index}`); 
// }

// for(let index=1; index<=20; index++){
//     if(index == 5){
//         console.log("detected");
//         continue    //will print till 4 then detected then continues w 6... so on!!
//     }
//     console.log(`value of i is ${index}`); 
// }

//while loop

// let index=0;
// while(index <= 10){
//     console.log(`value of index is ${index}`);
//     index = index+2
// }



//for of

// const arr = [1,2,3,4,5]
// for (const num of arr) {   //object- kis chiz ke upr loop
//     console.log(num);   
// }


//MAP is iteratable!

// const map = new Map()
// map.set('IN', "INDIA")
// map.set('USA', "United states of America")
// map.set('FR', "France")
// console.log(map);

// for(const [key, value] of map){
//     console.log(key, ':-' , value);
// }


//object is iteratable with certain synatx! for in
// const myObj = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift : "swift by apple"
// }

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);   
// }


//for each loop

// const coding = ['js', 'ruby', 'cpp', 'java', 'python']
// coding.forEach(  function (item)  {    //callback function so no name..
//     console.log(item);
// }  )


// //arrow function and full data 
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })



//objects inside array
const lang = [
    {
        language: 'java',
        name: 'j'
    },
    {
        language: 'python',
        name: 'py'
    },
    {
        language: 'javascript',
        name: 'js'
    }
]
lang.forEach( (item, index, arr) => {
    console.log(item);
})
