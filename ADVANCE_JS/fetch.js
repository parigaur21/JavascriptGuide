//fetch() - fetches the data from the server and returns a promise.

const promise3 = fetch("https://jsonplaceholder.typicode.com/users");
promise3.then(function(response){
    console.log(response);
})


//fetch api to nodejs - npm install node-fetch

//fetch standard - mdn docs