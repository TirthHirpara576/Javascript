/* */
function getAverage(n1,n2){
    let avg = (n1+n2)/2;
    console.log("Average : ",avg);
}
getAverage(3,3);


//return function :
function getSum(n1,n2){
    let sum = n1+n2;
    return sum;
}
let s=getSum(1,2);
console.log("sum : ",s);


function getMyName(firstname,lastname){
    let fullname = firstname + " " + lastname;
    return fullname;
}
let FullName = getMyName(7,"Hirpara");
console.log("FullName : ",FullName);



// Function Expression :
// let getPower = function(a,b){
//     return a**b;
// }
// let ans = getPower(2,3);
// console.log(ans);

//OR

/* Arrow Functions :
let getPower = (a,b) => {
    return a**b;
}
let ans = getPower(2,3);
console.log(ans);
*/
