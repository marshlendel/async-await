//Async Await (sort of....like an fetch)
/*
    * Introduced in ES8. Async allows us to avoid chaining promises (.then())
    * Allows us to write async code in a synchronous manner
    
    *. Same as regular functions except one thing:
        ! Async fx always returns a promise
        * So to resolve the returned promises, you have to use .then()
*/

//async function declaration
async function myFx() {
    return "hello world"
}

myFx().then(console.log) //Gotta resolve it

//Equivalent with regular function
function promiseFx() {
    return Promise.resolve("Promise Resolved")
}

promiseFx().then(console.log)

//expression version
const myExpressionFx = async () => {

}

// Await
/*
    Await is used only inside of an async function
    It waits for the promise to resolve or reject

    It's an equivalent of .then pretty much
*/

let spaceXURL = `https://api.spacexdata.com/v3/history`

//! Fetch method
// fetch(spaceXURL)
//     .then(response => response.json()) //<- Still wrapped inside promise so need a second .then
//     .then(data => console.log(data))


//! Async method

async function fetchData() {
    const response = await fetch(spaceXURL) //Before we doing anything wait on this information (await) because fetch is asynchronous
    const data = await response.json() //Waits for the fetch to be done
    console.log(data)


}

fetchData()