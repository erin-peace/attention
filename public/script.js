

// NAVBAR
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// TIMER
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}


// POPUP Radio
var modal = document.getElementById('ModalRadio');
var btn = document.getElementById("notification-radio");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// POPUP TV
var modal = document.getElementById('ModalTV');
var btn = document.getElementById("notification-tv");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// POPUP CEO
var modal = document.getElementById('ModalCEO');
var btn = document.getElementById("BtnCEO");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// POPUP GIFs
var modal = document.getElementById('ModalGIFs');
var btn = document.getElementById("BtnGIFs");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }}

//POPUP SUSHI
var modal = document.getElementById('ModalSushi');
var btn = document.getElementById("BtnSushi");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }}

//POPUP STALKER
var modal = document.getElementById('ModalStalker');
var btn = document.getElementById("BtnStalker");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }}

//POPUP KFC
var modal = document.getElementById('ModalKFC');
var btn = document.getElementById("BtnKFC");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }}

//POPUP TODDLER
var modal = document.getElementById('ModalToddler');
var btn = document.getElementById("BtnToddler");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }}

//POPUP InstaRobot
var modal = document.getElementById('ModalInstaRobot');
var btn = document.getElementById("BtnInstaRobot");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }}
