
//Quiz

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Providence") {
		correct++;
}
	if (question2 == "Hartford") {
		correct++;
}

	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}


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

//onClick Popups
function MessagePopup() {
  document.getElementById("MessagePopup").style.display = "flex";
}
function closeMessagePopup() {
  document.getElementById("MessagePopup").style.display = "none";
}

function AttnQuizPopup() {
  document.getElementById("AttnQuizPopup").style.display = "flex";
}
function closeAttnQuizPopup() {
  document.getElementById("AttnQuizPopup").style.display = "none";
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
