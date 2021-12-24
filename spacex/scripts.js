/*
    What is an API

    API stands for Application Program Interface
    In basic terms, API's just allow application to communicate with one another.
    THINK OF API AS THE GLUE FOR THE FRONT END AND BACKEND

    - The API is not the database or even the server, it is the code that allows us access points to the server.
    - access ponits come in the form of an endpoint, which directs us to different sets of data we can access.

*/

/*
    Asyncronous Programming

    Generally, code is read and implemented line by line - this is known as synchronou programming.

    In the case of fetching data from an outside source like we do with an API, if javascript did not have the ability to run code asynchronously, it would have to run each line of code, wait for the reponse from the API, and then finish running the rest of our code.

    In basic terms, asynchronous  programs to do more than one thing at a time.

    Async programming allows ourcode to continue to run while we are waiting on a reponse from an API. Once the fetch has finished retrieving the data it then presents us with that data, without having to wait on any other process.

    The fetch() method is an asynchronous method, and it is part of the browser window, not javascript.

    The fetch method starts the process of fetching a resource from the network, and will return a promise which is fulfilled once the reponse is available.

    A promise represents a value that is unknown when the promise is created, but represents the eventual fulfilled value or rejection (error)
        - A promise is ALWAYS one of thse states:
            - Pending: initial state, neither fulfilled or rejcted
            - Fulfilled: meaning the operation completed successfully 
            - Rejected : meaning the operation failed

    In the case of a fetch request a promise will resolve into a Reponse object that represents the reponse of the request made.

*/

/*
    Acessing the API

    Start by locating and grabbing the base URL of the API:
    Space X API documentation : https//docs.spacexdata.com
*/

const baseURL = "https://api.spacexdata.com/v2/rockets";
const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("th");

// fetchSpace();

/*
    1. The fetch method starts the process of fetching a resource from a network, and that fetch returns a promise which is fulfilled  once the reponse is available - Asynchronous coding!

    2. When we capture the result from the API in a promise resolver, it is received as JSON(Javascript Object Notation) which we need to convert to a JS object, we do this using the json() method. This method also returns a promise, which is why we need to return the result so that the next promise resolver can handle the reponse from the json() method.

    3. A callback is a function that is to be executed after another function has finished executing. In this case, our callback function is "displayRockets", and its waiting on our "fetchSpace" function and all of it's promises to resolve before being called and passed data.

    4. A best practice for fetch is to always include a .catch() so that we can catch any errors that occur throughout the fetch and promise process. 

*/

// function displayRockets(rockets) {
//     console.log("API Reponse:", rockets);
//     rockets.forEach(r => {
//         console.log(r)
//         let rocket = document.createElement("li")
//         rocket.innerText = r.name
//         spaceShips.appendChild(rocket);
//     });
// }

// Challenge 
// Have the "Submit" button call the fetch instead of on page load. 

let button = document.getElementById("submit");
button.addEventListener("click", (e) => {
    fetchSpace()
})

searchForm.addEventListener("submit", fetchSpace );

/* 
    Everytime we click the submit button, the page refreshes before we can see the results. That is intentional, forms have a default action when they are submitted. This default action is to refresh teh page. However, we have a method in JS to prevent that action from occuring:
*/
function fetchSpace(){
    event.preventDefault();
   // (1)
    fetch(baseURL)
    .then(result => {
        console.log(result);
                // (2)
        return result.json();
    })
    .then(json => {
        console.log(json);
        displayRockets(json)
    })
    // (4)
    .catch()
}

function displayRockets(rockets) {
    console.log("API Reponse:", rockets);
    rockets.forEach(r => {
        console.log(r)
        let rocket = document.createElement("tr");
        let rocketName = document.createElement("td");
        let rocketCost = document.createElement("td");
        rocketName.innerText = r.name
        rocketCost.innerText = r.cost_per_launch;
        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName)
        rocket.appendChild(rocketCost)
    });
}