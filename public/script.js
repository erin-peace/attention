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
var keepMoving = false;
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
	clearTimeout(timer);
}

//Body Popups
function firstPopup() {
  document.getElementById("modal-wrapper").style.display = "flex";
}
function closePopup() {
  document.getElementById("modal-wrapper").style.display = "none";
}

function timedPopup() {
  setTimeout(function() {
    document.getElementById("modal-wrapper-two").style.display = "flex";
  }, 4000);
}
timedPopup();
function closePopupTwo() {
  document.getElementById("modal-wrapper-two").style.display = "none";
}

function messagePopup() {
  document.getElementById("messagePopup").style.display = "flex";
}
function closemessagePopup() {
  document.getElementById("messagePopup").style.display = "none";
}

//Story Popups

function PoemPopup() {
  document.getElementById("blanket").style.display = "flex";
  document.getElementById("PoemPopup").style.display = "flex";
  document.getElementById("PoemPopup").style.overflow = "scroll";
}
function closePoemPopup() {
  document.getElementById("PoemPopup").style.display = "none";
}

function InstaPopup() {
  document.getElementById("InstaPopup").style.display = "flex";
  document.getElementById("InstaPopup").style.overflow = "scroll";
}
function closeInstaPopup() {
  document.getElementById("InstaPopup").style.display = "none";
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
