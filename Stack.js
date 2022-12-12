const pushbtn = document.getElementById('push');
const popbtn = document.getElementById('pop');
const peekbtn = document.getElementById('peek');
const sizebtn = document.getElementById('size');
const isEmptybtn = document.getElementById('isEmpty');
const submitElementBtn = document.getElementById('submitElement');
const element = document.getElementsByClassName('element');

onload = init;

function init() {
    var onclick = clickUpdates();
    submitElementBtn.addEventListener("click", onclick, false);
}

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

function clickUpdates() {
    var count = 0;
    var next = function() {
        switch(count) {
            case 0:
            // function click 1 here
            const targetElement = document.getElementById('pushoutput');
            const enteredElement = document.getElementById('e1').value;
            targetElement.innerHTML = enteredElement;
            targetElement.style.display = "block";
            targetElement.className = "box1";
            break;
            case 1:
            // function click 2 here
            const targetElement2 = document.getElementById('pushoutput2');
            const enteredElement2 = document.getElementById('e1').value;
            targetElement2.innerHTML = enteredElement2;
            targetElement2.style.display = "block";
            targetElement2.className = "box2";
            break;
            case 2:
            // function click 3 here
            const targetElement3 = document.getElementById('pushoutput3');
            const enteredElement3 = document.getElementById('e1').value;
            targetElement3.innerHTML = enteredElement3;
            targetElement3.style.display = "block";
            targetElement3.className = "box3";
            break;
            case 3:
            // function click 4 here
            const targetElement4 = document.getElementById('pushoutput4');
            const enteredElement4 = document.getElementById('e1').value;
            targetElement4.innerHTML = enteredElement4;
            targetElement4.style.display = "block";
            targetElement4.className = "box4";
            break;
            case 4:
            // function click 5 here
            const targetElement5 = document.getElementById('pushoutput5');
            const enteredElement5 = document.getElementById('e1').value;
            targetElement5.innerHTML = enteredElement5;
            targetElement5.style.display = "block";
            targetElement5.className = "box5";
            break;
            case 5:
            // function click 6 here
            const targetElement6 = document.getElementById('pushoutput6');
            const enteredElement6 = document.getElementById('e1').value;
            targetElement6.innerHTML = enteredElement6;
            targetElement6.style.display = "block";
            targetElement6.className = "box6";
            break;
            case 6:
            // function click 7 here
            const targetElement7 = document.getElementById('pushoutput7');
            const enteredElement7 = document.getElementById('e1').value;
            targetElement7.innerHTML = enteredElement7;
            targetElement7.style.display = "block";
            targetElement7.className = "box7";
            break;
            default:
            // function click 1 here
            console.log("All clicks are done.");
            break;
            
            
        }
        count = count<7?count+1:7;
    }
    
    return next;
}
