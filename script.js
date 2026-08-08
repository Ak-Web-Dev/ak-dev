new FinisherHeader({
  "count": 10,
  "size": {
    "min": 1300,
    "max": 1500,
    "pulse": 0
  },
  "speed": {
    "x": {
      "min": 0.1,
      "max": 0.6
    },
    "y": {
      "min": 0.1,
      "max": 0.6
    }
  },
  "colors": {
    "background": "#050a12",
    "particles": [
      "#ff4848",
      "#050a12",
      "#050a12"
    ]
  },
  "blending": "overlay",
  "opacity": {
    "center": 0.5,
    "edge": 0.05
  },
  "skew": -2,
  "shapes": [
    "c"
  ]
});

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
