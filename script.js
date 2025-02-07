let box = document.getElementById("wait");
function data(){
    // Add animation class
    document.body.classList.add("fade-out");
            
    // Delay redirection by 1 second (matching animation duration)
    setTimeout(function() {
        window.location.href = "data.html"; // Change this to your target page
    }, 1000);
} 


let helloBox = document.getElementById("hello");
function hi(){
    helloBox.classList.add("open-hello")
} 
function bye(){
    helloBox.classList.remove("open-hello")
}

function home() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "index.html"; // Change this to your target page
    }, 450);
}
function pop() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "2.html"; // Change this to your target page
    }, 450);
}
function back() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "data.html"; // Change this to your target page
    }, 450);
}
