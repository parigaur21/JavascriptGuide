// Function ko argument ke form me pass karte hain jo baad me call hota hai
// callback hell function

function getData(callback) {
    setTimeout(function() {
        callback({name: "pari"});
    }, 2000);
}

getData(function(data) {
  console.log(data);
});


// Callbacks are the traditional way to handle async operations
//  but lead to callback hell. Promises improve readability
//  with chaining, and async/await is a cleaner syntax built
//  on promises that makes asynchronous code look synchronous.”