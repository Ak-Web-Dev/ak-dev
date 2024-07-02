let popup = document.getElementById("popup");
function pop(){
    popup.classList.add("open-popup")
} 
function closepopup(){
    popup.classList.remove("open-popup")
}

function mail(){
    alert("Gmail Address: imakbss@gmail.com __ Discord: ahmed_khan_developer")
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
