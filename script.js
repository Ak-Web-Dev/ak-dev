new FinisherHeader({
  "count": 30,
  "size": {
    "min": 26,
    "max": 60,
    "pulse": 0
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 0.2
    },
    "y": {
      "min": 0,
      "max": 0.5
    }
  },
  "colors": {
    "background": "#181C2E",
    "particles": [
      "#bf0000",
      "#ec9100",
      "#bf0000"
    ]
  },
  "blending": "overlay",
  "opacity": {
    "center": 1,
    "edge": 1
  },
  "skew": 0,
  "shapes": [
    "t",
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