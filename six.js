// const coding = ['js', 'ruby', 'cpp', 'java', 'python']

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);



// const myNums = [1,2,3,4,5,6,7,8,9,0]
// const filteredNums = myNums.filter( (num) => num > 4 )
// console.log(filteredNums);

//but if you start scope you will have to return the value

// const myNums = [1,2,3,4,5,6,7,8,9,0]
// const filteredNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(filteredNums)




// const myNums = [1,2,3,4,5,6,7,8,9,0]
// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)


//chaining method- 2-3 methods together
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums
//                 .map((num) => num*10)
//                 .map((num) => num+1)
//                 .filter((num) => num >= 40)
// console.log(newNums);



//--------------------Reduce method----------------------
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.reduce(  function (accumulator, currValue) {
//     console.log(`acc: ${accumulator} and cuuValue: ${currValue}`)
//     return accumulator + currValue
// }, 0)
// console.log(newNums);


//crisp way to use reduce- no scope just direct condition
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.reduce( (accumulator, currValue) => (accumulator+currValue), 0)
console.log(newNums);

