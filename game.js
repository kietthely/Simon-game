var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
// add a random color from the buttonColors array to the randomChosenColor variable
var randomChosenColor = buttonColors[nextSequence()];
var gamePattern = [];
// then add the randomChosenColor to the end of the gamePattern array
gamePattern.push(randomChosenColor);
// detect when any of the buttons are clicked
var isPlaying = false;
// keep track of the level
var level = 0;
$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  // add the userChosenColor to the end of the userClickedPattern array
  userClickedPattern.push(userChosenColor);
  // animate the button that got pressed
  animatePress(userChosenColor);
});

// press a keyboard key to start
$(document).keypress(function () {
  if (!isPlaying) {
    isPlaying = true;
    $("h1").text("Level " + level);
    nextSequence();
  }
});

// function to generate a random number between 0 and 3
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  level++;
  return randomNumber;
}
// function to play the sound of the button that got pressed
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
// function to animate the button that got pressed
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
