/*

async function getData(){
    setTimeout( function(){
        console.log("I will run after 3sec.");
    },3000 );
}
// Use of async function -> promise ne efficiently Handle karva mate...(clean/easy to debug code bani jai...)
// async function -> always return one promise
let output = getData();  // output : write in console -> output+enter

*/

// fatch API :
async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // aa URL par jai ne data fatch karo... -> async
    let data = await response.json(); // async
    console.log(data); // sync
}
getData(); // see output: write in console : getData();+enter , koi output nahi aave. jya sudhi async -> data lai ne nahi aave tya sudhi

async function getPost(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts'); // aa URL par jai ne data fatch karo... -> async
    let data = await response.json(); // async
    console.log(data); // sync
}// see output: write in console : getPost();+enter