let popup = document.getElementById("popup");
function pop1(){
    popup.classList.remove("close-popup")
    popup.classList.add("open-popup")
} 
function close1(){
    popup.classList.remove("open-popup")
    popup.classList.add("close-popup")
}

let helloBox = document.getElementById("hello");
function hi(){
    helloBox.classList.add("open-hello")
} 
function bye(){
    helloBox.classList.remove("open-hello")
}

function project(){
    window.location.href = "data.html";
}
function back(){
    window.location.href = "index.html";
}

function pytuber(){
    var link = document.createElement('a');
    link.href = 'Assets/PyTuber.exe';
    link.download = 'PyTuber.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}