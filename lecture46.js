// Dynamic nature in objects
/*
let ob={
    age:13,
    weight:56
}
console.log(ob);
ob.color="Blue";
console.log(ob); */


// ways to create clonning of object :
/*
// i] spread Operator :
let ob={age:34,weight:56};
let ob1={...ob};
ob.age=100;
console.log("Source object:",ob);
console.log("Destination object:",ob1);
console.log();


// ii] Assign method :
let obj = {
    value:27,
    name:"Tirth h"
}
let ob2 = Object.assign({},ob,obj);
console.log("Destination object:",ob2);
console.log();


// iii] Through Iterator :
let src={
    age:23,
    wt:78,
    ht:45
};
let dest={};
for(let key in src){
    let newKey=key;
    let newValue=src[key];
    // insert new key & value in dest and create a clone
    dest[newKey]=newValue;
}
src.age=1000;
console.log("Source object:",src);
console.log("Destination object:",dest);
console.log();
*/



// Error Handling in JS :
/*
try{
    console.log("I am a try block.");
    console.log(x);
    console.log("I am again in try block.");
}
catch(err){
    console.log("I am a Error.",err);
}
finally{
    console.log("I am not dependent on error. I will run every time.")
}
*/

// let's create custom error
try{
    let x=3;
    console.log(x/0);
    throw new Error("This is a Devide by Zero Error!");  //Throw -> Object
}
catch(err){
    console.log();
    console.log(err);
}
