/**
 * ! Async/Await
 * 
 * ? Asynce/Await allows us to program using asynchronous requests, like a request to an API, in a "synchronous" manner - while still allowing other code to run in the background. This helps us keep our application or site responsive, reducing wait time for the user.
 * 
 *  - Allows us to program in a synchronous manner while still allowing code to run in the background.
 *  -Helps make our sites as responsive as possible.
 */

/**
 * ! Async Function (syntax)
 * 
 * ?We can make a normal function into an asynchronous function. This also allows us to unlock the "await" capability.
 * 
 *  - allows us to make normal functions asynchronous & use await
 *  -must use the async keyword at the beginning of the function declaration.
 */

 async function myFn() {
    // await...
}

const myAsyncFn = async () => {
//  await..
}

const newFn = () => {
    //  await... (provide a syntax error since the function is not declared as an async function)
}

//? The await keyword is basically stating that once it hits this line of code, wait for it to finish executing and then move on. We are introducing synchronous behavior to the application.

async function fn(){
    return "hello";
}
console.log(fn());
fn().then(console.log) //Promise of "hello" returned -> then console log value

fn().then(dataFromAsyncFunc => {
    console.log("test:",dataFromAsyncFunc);
})
console.log("Hello-Async");

//? Because we have used an async function, the return value "hello" is wrapped in a promise via the promise constructor. The body of an async function is always wrapped in a new promise. (resolve or reject

//? Here is what a promise would look like being returned
//* alt representation of returning a promise:

function altFn(){
    return Promise.resolve("Hi")
}

console.log(altFn())

//? async function ensure that the body of our function will return a promise

//! Await
/**
 * ? Await allows us to pause an async function's execution until a Promise is settled (fulfilled or rejected)
 * 
 * -pause at each await expression
 */

//* A typical way to make request from an API:
fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));

    //? This is an asynchronous  fetch to an API (provides dog photos) As we know, it returns a promise (resolve or reject). The .then (our resolver) is used to grab the response and jsonify it and with the .catch (reject, we capture our errors. These are all being chained together. Each .then is returning a promise of it's own. This is considered method chaining.)
    
    //   ?What about using await?
    //    const response = await fetch("https://random.dog/woof.json");
    //    const json = await response.json();
    //    console.log(json)
      
    /**
     * BREAKDOWN:
     * Line 1: We make a GET request to our random dog API. Instead of moving to the next line, we wait for the request to finish. Once finished, it passes the resolved value to the response variable.
     * 
     * Line 2: We then jsonify the results we got back. This, again, waits till it is completed before moving on.
     * 
     * Line 3: A console log displaying that json
     * 
     * ? But in order to make that above code work, we must wrap it in an async function, otherwise we will receive an error.
     */
     let picture = document. getElementById("image")
     let image = document.createElement("img")
    const request = async () => {
        const response = await fetch("https://random.dog/woof.json");
        const json = await response.json();
        return json;
    }

    request().then(json => {
        console.log(json)
        picture.appendChild(image)
        image.src = json.url
    })

    // Challenge:
    //  Make the return of our async function appear on our page.