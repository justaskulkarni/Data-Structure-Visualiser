const pushbtn = document.getElementById('push');
const popbtn = document.getElementById('pop');
const peekbtn = document.getElementById('peek');
const sizebtn = document.getElementById('size');
const isEmptybtn = document.getElementById('isEmpty');
const submitElementBtn = document.getElementById('submitElement');
const element = document.getElementsByClassName('element');
const box  =document.getElementsByClassName('box');


pushbtn.addEventListener('click', function onClick(event) {
    pushinput.style.display = "block";
});

popbtn.addEventListener('click', function onClick(event){
    const popoutput = document.getElementById('popoutput');
    popoutput.style.display = "block";    
});

peekbtn.addEventListener('click', function onClick(event){
    const peekoutput = document.getElementById('peekoutput');
    peekoutput.style.display = "block";    
});

sizebtn.addEventListener('click', function onClick(event){
    const sizeoutput = document.getElementById('sizeoutput');
    sizeoutput.style.display = "block";    
});

isEmptybtn.addEventListener('click', function onClick(event){
    const isEmptyoutput = document.getElementById('isEmptyoutput');
    isEmptyoutput.style.display = "block";    
});

submitElementBtn.addEventListener('click', function(){
    const targetElement = document.getElementById('pushoutput');
    const enteredElement = document.getElementById('e').value;
    targetElement.innerHTML = enteredElement;
    targetElement.style.display = "block";
    targetElement.className = "box";
});
