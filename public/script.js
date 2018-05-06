// Code with Pete
// Lesson 10: Popups, events, and timing with JavaScript

// Here we define the firstPopup() function.
// A function definition starts with the keyword `function` and contains
// some code to be executed within the curly brackets following.
function firstPopup() {
  document.getElementById("modal-wrapper").style.display = "flex";
}
// The first popup will appear as soon as the <body> tag has loaded becasue
// we call the firstPopup() function in the onload attribute of
// the <body> tag.

// Here we define the timedPopup() function.
function timedPopup() {
  setTimeout(function() {
    document.getElementById("modal-wrapper-two").style.display = "flex";
  }, 3000);
}
// This popup will appear after three seconds has elapsed. Try changing the number
// from 3000 to any other number to see how that affects the timed popup.
// In the setTimeout function, timing is denoted in milliseconds,
// and 3000 milliseconds equals three seconds.

// Here we call the timedPopup() function.
timedPopup();


function closePopup() {
  document.getElementById("modal-wrapper").style.display = "none";
}

function closePopupTwo() {
  document.getElementById("modal-wrapper-two").style.display = "none";
}


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
