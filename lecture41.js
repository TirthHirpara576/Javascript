/*
let i=1;
while(i<5){
    if(i==3){
        i++;    // aa compulsory continue keyword ni upper lakhavu pade... Otherwise -> infinite loop
        continue;
    }
    else{
        console.log(i);
    }
    i++;
}


let j=5;
do{
    console.log(j);
    j--;
}while(j>0);

*/


//Strings
let fullname="Tirth Hirpara";  // enter aapi ne lakhava jaiye -> Not possible
console.log(typeof(fullname));
console.log(fullname);
console.log();

let p = `tirth
my name is tirth.
I am 18 years old. `;
console.log(p);

//another way to create string :
let str = new String("This is a second way to create a string");
console.log(str);

//concatination in strings :
let str1 = " !";
let ans = str + str1;
console.log(ans);
//second way for strings concatination  :
let FinalAns = `${str}${str1}`;
console.log(FinalAns);

// Finding legth of string , converting toUpperCase & toLowerCase :
console.log(FinalAns.length);
console.log(FinalAns.toUpperCase());
console.log(FinalAns.toLowerCase());

// find substring :
let str2="HiHello";
console.log(str2.substring(2));
console.log(str2.substring(2,4)); // ending index is exclusive


// split() method is used to split a string into an array of substrings based on a specified separator(Ex. space is seperator) :
let sentence = "this is a sentence";
let words = sentence.split(" ");
console.log(words);

console.log("helloJee \"kaise\" ho saare");      //  use of back slash in string : inside string, double qoutes print karva mate...

let sentence1 = "this \\is \\a \\sentence";
let words1 = sentence.split('\\');
console.log(words1);


// join() method is used to concatenate all the elements of an array into a single string using a specified separator :
console.log(words.join(","));
console.log(words.join(" "));