/*
function changeText(){
    let fp=document.getElementById('fpara');
    fp.textContent="Hello Tirth !";
    fp.style.color = "red";
}

let fp=document.getElementById('fpara');
fp.addEventListener('click',changeText,true);  // please ckeck, HTML output->inspect->write in console-> monitorEvents(document); -> click in element(output).     so,many events are there.lastly click event is also added
// to remove the Eventlistener -> write in console -> fp.removeEventListener('click',changeText);  -> either refresh the page OR click in element(Output)
 */
// Event-Object :
/*
function changeText(event){      // tyare te event function ne mali jai
    console.log(event);          // te event console ma pan dekhashe      pointerEvent {...}
    let fp=document.getElementById('fpara');
    fp.textContent="Hello Tirth !";
}

let fp=document.getElementById('fpara');
fp.addEventListener('click',changeText);  //when any event- trigger by eventListener,
*/
// change Default behavior  :
/*
let anchorElement = document.getElementById('fanchor');

anchorElement.addEventListener('click',function(event){  // EventListner
    event.preventDefault(); // anchor tag no defualt behavior(biji link par lai javu) stop thai jai
    anchorElement.textContent = "If you click me, i don't go any link";
});
*/
// Avoiding too many listners :
/*
let paras = document.querySelectorAll('p'); // badha para select kari lidha...
for(let i=0;i<paras.length;i++){
    let para = paras[i];
    para.addEventListener('click',function(){
        alert("you have to click on para-"+ (i+1) );
    });
}
*/
// OR
/*
let paras = document.querySelectorAll('p'); // badha para select kari lidha...
function alert_para_message(event){
    alert("you have to click on para : "+ event.target.textContent );
}
for(let i=0;i<paras.length;i++){
    let para = paras[i];
    para.addEventListener('click',alert_para_message);
}
*/
// OR
/*
function alert_para(event){
    alert("you have to click on para : "+ event.target.textContent );
}
let mydiv = document.getElementById('wrapper');
mydiv.addEventListener('click',alert_para);  // je element par hu click karu, teno content print thai...
*/
// OR
/*  */
function alert_para(event) {
    if (event.target.nodeName === 'SPAN') alert("you have to click on para : " + event.target.textContent);
}
let mydiv = document.getElementById('wrapper');
document.addEventListener('click', alert_para); // je element par hu click karu, teno content print thai... 

