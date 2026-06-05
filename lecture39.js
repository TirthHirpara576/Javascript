// JS -> Dynamically typed language

console.log("Namaste Duniya!");
let age=23;
age=27;
// const Age=23;   //Error
// Age=27;

console.log(age);
let fullname="Tirth";
console.log(fullname);
let x=null;
let y=undefined;    // khabar j nathi k aani andar shu chhe?
let p;//undefinrd

console.log(x);
console.log(y); 
let o=true;
console.log(o); 


//objects  
const student={         // print karva mate console ma student +enter lakhvu....
    fullName:"tirth",
    age:44,
    spi:5.7,
    isPass:true
};
student.age=23;
console.log("Student age : "+ student.age); 
console.log("Student Fullname : ",student["fullName"]); 
console.log(student);