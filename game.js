var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);
  level++;
  $("#level-title").text("Level-"+level);
  userClickedPattern = [];



}

var gameStetus = 0;
$(document).keypress(function(){
  gameStetus++;
  if (gameStetus === 1){
      nextSequence();
      gameStetus++;
  }
  console.log(gameStetus);
});



var userChosenColour = "color";
$(".blue").click(function(){
userChosenColour = $(".blue").attr("id");
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer((userClickedPattern.length-1));
console.log(userClickedPattern);
});
$(".green").click(function(){
userChosenColour = $(".green").attr("id");
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer((userClickedPattern.length-1));
console.log(userClickedPattern);
});
$(".red").click(function(){
userChosenColour = $(".red").attr("id");
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer((userClickedPattern.length-1));
console.log(userClickedPattern);
});
$(".yellow").click(function(){
userChosenColour = $(".yellow").attr("id");
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer((userClickedPattern.length-1));
console.log(userClickedPattern);
});

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}

function checkAnswer(currentLevel){
  console.log("currentLevel:"+currentLevel);
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");
    if(gamePattern.length===userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    console.log("wrong");

    var keyWrong = new Audio('sounds/wrong.mp3');
    keyWrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();

  }
}

function startOver(){
  gameStetus = 0;
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
}

function playSound(soundKey) {
  switch (soundKey) {
    case "blue":
      var keyBlue = new Audio('sounds/blue.mp3');
      keyBlue.play();
      break;
    case "green":
      var keyGreen = new Audio('sounds/green.mp3');
      keyGreen.play();
      break;
    case "red":
      var keyRed = new Audio('sounds/red.mp3');
      keyRed.play();
      break;

    case "yellow":
      var keyYellow = new Audio('sounds/yellow.mp3');
      keyYellow.play();
      break;
    default: console.log(soundKey);

  }




}
