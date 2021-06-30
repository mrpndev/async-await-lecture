// Async Await
/*
    Introduced in ES8. Async allows us to avoid chaining promises (.then())
    Allows us to write async code in a synchronous manner.
    Same as good'ole functions except one thing:
        ! Async fx always returns a promise
*/

// Standard function
function standFx() {
    return "Hello World"
}
console.log(standFx())

// Async Fx Declaration
async function myFx() {
    return "Hello World"
}

// Async function always returns a promise
console.log(myFx())

// To resolve our promise, we utilize .then()
myFx().then(console.log)

// Alternate representation returning a promise without async.
function promiseFx() {
    return Promise.resolve("Promise Resolved")
}

promiseFx().then(console.log)

const exprFx = async () => {
    // Fx expression (arrow)
}

// Await
/*
    Await is used only inside of an async function.
    It waits for the promise to resolve or reject.
*/

let spaceXURL = `https://api.spacexdata.com/v3/history`

// fetch(spaceXURL)
//     .then(res => res.json())
//     .then(data => console.log(data))

async function fetchData() {
    const res = await fetch(spaceXURL)
    const data = await res.json()
    // console.log(data)
}

fetchData()







