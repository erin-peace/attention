//Timed Popups

function timedPopup() {
  setTimeout(function() {
    document.getElementById("WelcomePopup").style.display = "flex";
  }, 4000);
}
timedPopup();
function closePopupTwo() {
  document.getElementById("WelcomePopup").style.display = "none";
}

function timedPopup3() {
  setTimeout(function() {
    document.getElementById("CookiePopup").style.display = "flex";
  }, 1000);
}
timedPopup3();
function closePopupThree() {
  document.getElementById("CookiePopup").style.display = "none";
}

function timedPopup4() {
  setTimeout(function() {
    document.getElementById("RandomPopup1").style.display = "flex";
  }, 1000);
}
timedPopup4();
function closePopupFour() {
  document.getElementById("RandomPopup1").style.display = "none";
}


function messagePopup() {
  document.getElementById("messagePopup").style.display = "flex";
}
function closemessagePopup() {
  document.getElementById("messagePopup").style.display = "none";
}

//Story Popups
function PoemPopup() {
  document.getElementById("PoemPopup").style.display = "flex";
	document.getElementById("body").style.position = "fixed";
	document.getElementById("WholePage").classList.add("Blanket");
}
function closePoemPopup() {
  document.getElementById("PoemPopup").style.display = "none";
	document.getElementById("body").style.position = "relative";
	document.getElementById("WholePage").classList.remove("Blanket");
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
