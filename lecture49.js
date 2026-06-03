/* 
// Promises for synchronous code :
 

let first_promise = new Promise( (resolve,reject) => {
    console.log("Tirth");
    resolve(1001);         // bydefualt , pandding state ma j hoi...    // output -> see in console
    //OR
    reject(new Error("Failed to execute:-"));
});
*/

/*
// example of asynchronous code :
function sayMyName(){
    console.log("My name is tirth.");
}
setTimeout(sayMyName,10000);      // output -> see in console
  

// Promises for Asynchronous code :

let first_promise = new Promise( (resolve,reject) => {
    setTimeout(function sayMyName(){
        console.log("My name is tirth.");
    },10000); 
    resolve(1);                               // output -> see in console
});
*/

/*

// after <fulfilled> state in promise  -> then()  &   after <rejected> state in promise  -> catch()
let first_promise = new Promise( (resolve,reject) => {
    let flag = true;
    if(flag) resolve("Promise Fulfilled");
    else  reject("promise rejected");                               // type in console , first_promise + enter    -> output : filfilled state
});

first_promise.then( (msg) => {
    console.log("then ka message : " + msg);
}).catch( (error) => {
    console.log("Error : " + error);
})       // see in console , first_promise ->true -> output -> then ka message : filfilled state
    // see in console , first_promise ->if false -> output -> Error : promise rejected


// multiple then() is also possible :
first_promise.then( (msg) => {
    console.log("then ka message : " + msg);
    return "second fulfilled message";
}).then( (msg) => {
    console.log("then ka message : " + msg);
    return "third fulfilled message";
}).then( (msg) => {
    console.log("then ka message : " + msg);
}).catch( (error) => {
    console.log("Error : " + error);
}).finally( () => {
    console.log("main to chalunga hi... ");
})

*/



let first_promise = new Promise( (resolve,reject) => {
    setTimeout(resolve,1000,"First");                        // after 1sec, automatic resolve thai jai and "string" return thai jai...
}) 
let sec_promise = new Promise( (resolve,reject) => {
    setTimeout(resolve,2000,"second");                        // after 2sec, automatic resolve thai jai and "string" return thai jai...
})
let third_promise = new Promise( (resolve,reject) => {
    setTimeout(reject,3000,"third");                        // after 4sec, automatic resolve thai jai and "string" return thai jai...
})
Promise.all([sec_promise,first_promise,third_promise])      //  new promise k je tyare j resolve mark thashe jyare upeer 3ney resolve thai gya hashe..
.then( (values) => {
    console.log(values);
})
.catch( (error) => {   // jo 3 mathi koi reject thai to j error print karshe...
    console.log("Error : " + error);
})


