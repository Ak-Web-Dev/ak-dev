let popup = document.getElementById("popup");
function pop1(){
    popup.classList.remove("close-popup")
    popup.classList.add("open-popup")
} 
function close1(){
    popup.classList.remove("open-popup")
    popup.classList.add("close-popup")
}

let popup2 = document.getElementById("popup2");
function pop2(){
    popup.classList.remove("open-popup")
    popup.classList.add("close-popup")
    popup2.classList.remove("close-popup")
    popup2.classList.add("open-popup")
} 
function close2(){
    popup2.classList.remove("open-popup")
    popup2.classList.add("close-popup")
}
function remove2(){
    popup2.classList.remove("open-popup")
    popup2.classList.add("close-popup")
    popup.classList.remove("close-popup")
    popup.classList.add("open-popup")
}

let helloBox = document.getElementById("hello");
function hi(){
    helloBox.classList.add("open-hello")
} 
function bye(){
    helloBox.classList.remove("open-hello")
}