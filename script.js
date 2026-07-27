new FinisherHeader({ "count": 10, "size": { "min": 1300, "max": 1500, "pulse": 0.2 }, "speed": { "x": { "min": 0.1, "max": 0.6 }, "y": { "min": 0.1, "max": 0.6 } }, "colors": { "background": "#9138e5", "particles": [ "#ff4848", "#000000", "#2235e5", "#000000", "#ff0000" ] }, "blending": "overlay", "opacity": { "center": 0.5, "edge": 0.05 }, "skew": -2, "shapes": [ "c" ] }); 

function d1(){
  var link = document.createElement('a');
  link.href = 'Assets/PyTuber.exe';
  link.download = 'PyTuber.exe';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

let helloBox = document.getElementById("hello");
function hi(){
  console.log()
  helloBox.classList.add("open-hello")
} 
function bye(){
  helloBox.classList.remove("open-hello")
}

function land() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

function forwarded() {
  window.location.href = "index2.html";
}

const timeline = document.querySelector(".timeline");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            timeline.classList.add("visible");

            // Prevent animation from restarting
            observer.unobserve(timeline);
        }
    });
}, {
    threshold: 0.1
});

observer.observe(timeline);
