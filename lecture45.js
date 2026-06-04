// Classes :
/* 

class Human{
    //Properties(Bydefualt public):
    age=13;
    #weight=56; 

    //Behavior:
    constructor(a=0,w=0){ // defualt value of function
        this.age=a;   
        this.#weight=w;
    }
    walking(){
        console.log("I am Walking");
    }
    
    get get_weight(){
        return this.#weight;
    }
    set_weight(val=0){
        this.#weight = val;
    }
}
let ob=new Human();
console.log(ob.age);
ob.walking();
ob.set_weight(100);
console.log(ob.get_weight);

let ob1=new Human(34);
console.log(ob1.age);
console.log(ob1.get_weight);

*/


/* 

// defualt value (as an dependency) of function:
function sayName(fname="KK" , lname = fname.toUpperCase()){
    console.log("My name is : ",fname," ",lname);
}
sayName("tirth");

// defualt value (as an object) of function:
function solve( value = {age:15,name:"Tirth",weight:67} ){
    console.log("Hello Jee : ",value);
}
solve(14);
solve();

// defualt value (as an Array) of function:
function myfun( value = [1,"tirth",67] ){
    console.log("Hello Jee : ",value);
}
myfun(14);
myfun();

// what happen? If we try to pass null OR Undefined as an argument
myfun(null); //null
myfun(undefined); // defualt value of function


// defualt value (as an Function) of function:
function getAge(){
    return 89;
}
function Utility(name , age = getAge()){
    console.log(name,"  ",age);
}
Utility("Tirth");
Utility();
 */






// In-Built Objects :
// Math object:
/*
console.log(Math.PI);
console.log(Math.sqrt(25) ,"  ", Math.pow(2,10));

console.log(Math.max(22,44,67,45,89,199));
console.log(Math.min(22,44,67,45,89,199));
console.log(Math.round(1.6) ,"  ", Math.round(1.4));

console.log(Math.floor(1.4) , "  " , Math.ceil(1.1));  

console.log(Math.abs(1.1) ,"  ", Math.abs(-1.1)); // abselute value : -Ve  ->  +Ve

console.log(Math.random()); // provide any random number between 0 and 1 : [0,1)

*/

// Date object: (aa badha ne console par lakhvathi sarkhu output aavshe...)
let curr_date = new Date();
console.log(curr_date);

let date = new Date('June 20 1998 07:15');
console.log(date);

let date1 = new Date(1998,6,20,7);
console.log(date1);
console.log(date1.getDate());  // . pachhi na references jovana... different functionalities OR get-methods are avaliable.

// let say, set methods... (aa badha ne console par lakhvathi sarkhu output aavshe...)
console.log(date1.setFullYear(2001));
console.log(date1);