// Objects(data members & functions) :
/* 
let obj = {
    firstname : "Tirth",
    "Last name" : "Tirth Hirpara",
    age : 19,
    weight : 47,

    greet: function(){
        console.log("HelloJee kaise ho saree!");
    }
    // OR
    // greet: ()=>{
    //     console.log("HelloJee kaise ho saree!");
    // }
};
console.log(obj);
obj.greet();
console.log(typeof(obj));
*/



//Arrays:
let arr = [1,'Tirth',true];    // using array literals
console.log(arr);
const fruits = new Array('banana','mango');  // using array constructors
console.log(fruits);

console.log(typeof(arr));
console.log(typeof(fruits));
console.log(arr[0]);  // access


//Built-in method in arrays : 
arr.pop();
arr.push("hirpara");
arr.push(29);
arr.push(30);
arr.push(true);

arr.shift();
arr.unshift(100);
console.log(arr);

//console.log(arr.slice(2,4));  // part of array indexes [2,4)  &  shalow copy : both are pointing to same memory
arr.splice(1,2,'kunal');  // 1 to 2 index valo data remove kari ne 'kunal' insert karo (Repalace)
console.log(arr);
arr.splice(1,0,'kunali'); // remove kai nathi karvu, khali 1st index a 'kunali' insert karvu chhe...
console.log(arr);


let a = [1,2,3,4,5,10];
let ansArray = a.map((num)=>{       
    return num*num;
});
console.log(ansArray);
// print element through map()
ansArray.map((element,index) =>{
    console.log("Element:",element," Index:",index);
});

let EvenArray = a.filter((num) => {
    // if(num%2 === 0){
    //     return 1;
    // }
    // else{
    //     return 0;
    // }
    //OR
    return num%2===0;
});
console.log();
console.log(EvenArray);


let b = [1,'tv',54,'kj','tfs'];
let ans = b.filter((num) => {
    if(typeof(num) === 'string'){
        return true;
    }
    else   return false;
});
console.log(ans);


let c = [10,20,30,40];
let sum = c.reduce((acc,curr) => {  // accumalator is initilaize with 0.
    return acc+curr;
},0);
console.log(sum);


let drr = [3,6,4,1,8,2];
drr.sort();
drr.sort().reverse();  // desc order ma sorting
console.log(drr);

console.log(drr.indexOf(9));
console.log(drr.indexOf(3));  // [ 8, 6, 4, 3, 2, 1 ]



let numbers = [10,20,30,40,50];
let result = numbers.find(num => num>25);
console.log(result);//30

let l=numbers.length;
console.log("Array Length : ",l);

// 3 types of loops(methods) :
arr.forEach((value,index) => {    // arr = [100, 'kunali', 'kunal', 29, 30, true] 
    console.log("Element:",value," Index:",index);
});