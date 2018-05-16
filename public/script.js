
//Quiz

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question3.value;
	var correct = 0;

	if (question1 == "Selective") {
	correct++;}
	if (question2 == "Alternating") {
	correct++;}
	if (question3 == "Sustained") {
	correct++;}
	if (question4 == "Divided") {
	correct++;}

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

function timedRandomPopup2() {
  setTimeout(function() {
    document.getElementById("RandomPopup2").style.display = "flex";
  }, 120000);
}
timedRandomPopup2();
function closeRandomPopup2() {
  document.getElementById("RandomPopup2").style.display = "none";
}

//onClick Popups
function MessagePopup() {
  document.getElementById("MessagePopup").style.display = "flex";
}
function closeMessagePopup() {
  document.getElementById("MessagePopup").style.display = "none";
}

function AttnQuizPopup() {
  document.getElementById("AttnQuizPopup").style.display = "block";
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


//SCROLL TO TopPicks
(function(){
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		// browser window scroll (in pixels) after which the "back to top" link is shown
		offset = 2200,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offsetOpacity = 1200,
		scrollDuration = 700
		scrolling = false;
	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});
		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : scrollTop(scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? addClass(backTop, 'cd-top--show') : removeClass(backTop, 'cd-top--show', 'cd-top--fade-out');
		( windowTop > offsetOpacity ) && addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}

	function scrollTop(duration) {
	    var start = window.scrollY || document.documentElement.scrollTop,
	        currentTime = null;

	    var animateScroll = function(timestamp){
	    	if (!currentTime) currentTime = timestamp;
	        var progress = timestamp - currentTime;
	        var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
	        window.scrollTo(0, val);
	        if(progress < duration) {
	            window.requestAnimationFrame(animateScroll);
	        }
	    };

	    window.requestAnimationFrame(animateScroll);
	}

	Math.easeInOutQuad = function (t, b, c, d) {
 		t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	};

	//class manipulations - needed if classList is not supported
	function hasClass(el, className) {
	  	if (el.classList) return el.classList.contains(className);
	  	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	function addClass(el, className) {
		var classList = className.split(' ');
	 	if (el.classList) el.classList.add(classList[0]);
	 	else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
	 	if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
	}
	function removeClass(el, className) {
		var classList = className.split(' ');
	  	if (el.classList) el.classList.remove(classList[0]);
	  	else if(hasClass(el, classList[0])) {
	  		var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
	  		el.className=el.className.replace(reg, ' ');
	  	}
	  	if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
	}
})();
