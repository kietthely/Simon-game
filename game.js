var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
// detect when any of the buttons are clicked
var isPlaying = false;
// keep track of the level
var level = 0;
// press a keyboard key to start
$(document).keypress(function () {
  if (!isPlaying) {
    isPlaying = true;
    nextSequence();
  }
});
function initGame() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  isPlaying = false;
}
// detect when any of the buttons are clicked
$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  // add the userChosenColor to the end of the userClickedPattern array
  userClickedPattern.push(userChosenColor);
  // animate the button that got pressed
  animatePress(userChosenColor);
  // play the sound of the button that got pressed
  playSound(userChosenColor);

  // check userClickedPattern against gamePattern

  if (
    gamePattern
      .slice(0, userClickedPattern.length)
      .every((value, index) => value !== userClickedPattern[index])
  ) {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    initGame();
  } else if (gamePattern.length === userClickedPattern.length) {
    nextSequence();
    // reset the userClickedPattern array
    userClickedPattern = [];
  }
  console.log("userClickedPattern: " + userClickedPattern);
  console.log("gamePattern: " + gamePattern);
});

// function to generate a random number between 0 and 3
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  // add a random color from the buttonColors array to the randomChosenColor variable
  var randomChosenColor = buttonColors[randomNumber];
  // add a flash animation to the button with the same id as the randomChosenColor
  setTimeout(function () {
    playSound(randomChosenColor);
    $("#" + randomChosenColor)
      .fadeOut(100)
      .fadeIn(100);
  }, 750);

  $("h1").text("Level " + level);
  // then add the randomChosenColor to the end of the gamePattern array
  gamePattern.push(randomChosenColor);
  level++;
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
