//fetch() - fetches the data from the server and returns a promise.

const promise3 = fetch("https://jsonplaceholder.typicode.com/users");
promise3.then(function(response){
    console.log(response);
})


//fetch api to nodejs - npm install node-fetch

//fetch standard - mdn docs

//Microtask queue / priority queue - task queue for fetch() VIP line in js

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API


// response deta h agar 404 error hai

// response = fetch("something"):: -- it gives a promise
//1. Data - onfullfilled[data] and onrejected[error]
//2. web browser/node -> network request -> response (success or failure)
//3. data goes to global memory