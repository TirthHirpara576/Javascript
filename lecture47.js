// change HTML


// append child :-
/*  */
let fHeading=document.createElement('h1');
fHeading.textContent="I am a <H1> Heading.";
let BodyTag=document.querySelector('body');
BodyTag.appendChild(fHeading);



//Add Child perticular position in HTML code :-
/*   
let mydiv=document.querySelector('#mydiv');
let newElement=document.createElement('span');
newElement.textContent="I am a span Tag...";
mydiv.insertAdjacentElement('beforebegin',newElement);
*/


//remove Child -> #fPara 
/* 
//let parent=document.querySelector('#mydiv');
// OR
let child=document.querySelector('#fPara');
let parent=child.parentElement;  // i want to select parent from child(directly)...  method -> .parentElement
parent.removeChild(child);   // see output, #fPara is removed
*/




// change CSS :
/*  
let DivElement=document.getElementById('first_div');  // Note : aani id ma '#' sign nahi mukvani. baki badhi property ma aavshe...
DivElement.style.backgroundColor='blue';
console.log(DivElement.style);
let paraElement=document.getElementById('first_para');
paraElement.style.color='red';

// DivElement.setAttribute('style',"width:20vw;padding:4rem");
*/