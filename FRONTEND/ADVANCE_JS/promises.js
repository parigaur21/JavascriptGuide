// <!-- Promises: objects that represent the eventual completion (or 
// failure) of an asynchronous operation and its resulting value. 
// They provide a cleaner and more manageable alternative to 
// traditional callbacks for handling tasks like fetching
// data from an API, reading files, or managing timed events. -->


const promise1 = new Promise((resolve, reject) => {
    //do an async task
    //db calls , cryptography, network
    setTimeout(() => {
        console.log("Async task completed");
        resolve({
            name: "pari",
            age: 20
        })
    }, 2000);
});

promise1.then(function(){          
    console.log("Promise resolved");
    console.log(user.name);
})


// The fetch() API, which is a modern replacement for XHR, is built upon Promises.
const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/1");
promise2.then(function(response){
    console.log(response);
})


//3States : pending, fulfilled, rejected

//chaining promises - ek async operation ke result ko nexr operation me pass krna bina nesting ke
//for this we use .then and .catch
//without chaining ( callback hell style ) : 
// getData(function(a) {
//   getMoreData(a, function(b) {
//     getEvenMoreData(b, function(c) {
//       console.log(c);
//     });
//   });
// });)
const promise3 = fetch("https://jsonplaceholder.typicode.com/posts/1");
promise3.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"));
  //upar wle .then se value aygi to vo hogi chaining!



      