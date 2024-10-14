var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
// add a random color from the buttonColors array to the randomChosenColor variable
var randomChosenColor = buttonColors[nextSequence()];
var gamePattern = [];
// then add the randomChosenColor to the end of the gamePattern array
gamePattern.push(randomChosenColor);

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  // add the userChosenColor to the end of the userClickedPattern array
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});
// function to generate a random number between 0 and 3
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
