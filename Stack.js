const pushbtn = document.getElementById('push');
const pushinput = document.getElementById('pushinput');
const submitElementBtn = document.getElementById('submitElement');
const element = document.getElementsByClassName('element');
const box  =document.getElementsByClassName('box');
pushbtn.addEventListener('click', function onClick(event) {
    pushinput.style.display = "block";
});
submitElementBtn.addEventListener('click', function(){
    const targetElement = document.getElementById('pushinput');
    targetElement.className = "box";
});
