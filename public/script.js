// Cookie Popup
var timer = null;
var speed = 3; //1 is  slow
var endTop = 0;
var endLeft = 0;

function getEl(SlideIn){
	var el = document.getElementById(SlideIn);
	return el;
}
function showEl(id){
	getEl(id).style.display ="flex";
}
function hideEl(id){
	getEl(id).style.display ="none";
}
function moveEl(SlideIn){
	var popup = getEl(SlideIn);
	var currentTop = parseInt(popup.offsetTop);
	var currentLeft = parseInt(popup.offsetLeft);
var keepMoving = true;
if (currentTop <= endTop){
	popup.style.top = (currentTop + speed) + "px";
	keepMoving = true;
}
if(currentLeft <= endLeft){
	popup.style.left = (currentLeft + speed) + "px";
	keepMoving = true;
}
if (keepMoving){
	startMove(SlideIn);
}
else{
	endMove();
}}
function startMove(SlideIn){
	timer = setTimeout("moveEl('"+SlideIn+"')", 1);
}
function endMove(){
	clearTimeout(4000);
}

//Timed Popups

function timedPopup() {
  setTimeout(function() {
    document.getElementById("modal-wrapper-two").style.display = "flex";
  }, 4000);
}
timedPopup();
function closePopupTwo() {
  document.getElementById("modal-wrapper-two").style.display = "none";
}

function timedPopup3() {
  setTimeout(function() {
    document.getElementById("modal-wrapper-three").style.display = "flex";
  }, 3000);
}
timedPopup3();
function closePopupThree() {
  document.getElementById("modal-wrapper-three").style.display = "none";
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
