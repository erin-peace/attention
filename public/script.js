var timer = null;
var speed = 3; //1 is  slow
var endTop = 0;
var endLeft = 0;

//******************************************************
// Simple little function to get Elements as an object
//******************************************************
function getEl(SlideIn)
{
	var el = document.getElementById(SlideIn);
	return el;
}
//******************************************************
// Function to show Elements
//******************************************************
function showEl(id)
{
	getEl(id).style.display ="flex";
}
//******************************************************
// Function to hide Elements
//******************************************************
function hideEl(id)
{
	getEl(id).style.display ="none";
}

//******************************************************
// Function to move Element
//******************************************************
function moveEl(SlideIn)
{
	var popup = getEl(SlideIn);
	var currentTop = parseInt(popup.offsetTop);
	var currentLeft = parseInt(popup.offsetLeft);

var keepMoving = false;

//Move
if (currentTop <= endTop)
{
	popup.style.top = (currentTop + speed) + "px";
	keepMoving = true;
}
if(currentLeft <= endLeft)
{
	popup.style.left = (currentLeft + speed) + "px";
	keepMoving = true;
}
if (keepMoving)
{
	startMove(SlideIn);
}
else
{
	endMove();
}
}
//******************************************************
// Function to start the move
//******************************************************
function startMove(SlideIn)
{
	timer = setTimeout("moveEl('"+SlideIn+"')", 1);
}
//******************************************************
// Function to end the move
//******************************************************
function endMove()
{
	clearTimeout(timer);
}



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
  }, 4000);
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

function messagePopup() {
  document.getElementById("messagePopup").style.display = "flex";
}
function closemessagePopup() {
  document.getElementById("messagePopup").style.display = "none";
}

function PoemPopup() {
  document.getElementById("blanket").style.display = "flex";
  document.getElementById("PoemPopup").style.display = "flex";
  document.getElementById("PoemPopup").style.overflow = "scroll";
}
function closePoemPopup() {
  document.getElementById("PoemPopup").style.display = "none";
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
