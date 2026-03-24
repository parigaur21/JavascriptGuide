// async → function ko async banata hai (hamesha Promise return karega)
// await → promise ke result ka wait karta hai (without blocking whole program)



const promise4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "pari", age: 20});
        }
        else{
            reject({error: "something went wrong"});
        }
    }, 2000);
})

async function handlePromise4() {
  try {
    const res = await promise4;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

handlePromise4();

async function getUser(){
    try{
        const user = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(user);
    }
    catch(error){
        console.log(error);
    }
}
getUser();

// “Async/await is syntactic sugar over promises that allows writing asynchronous code in a synchronous style, improving readability and error handling.”



async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}



fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));