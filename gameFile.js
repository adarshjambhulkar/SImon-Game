// refactor code

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];

var gameStetus = 0;

$(document).keypress(function(){
  gameStetus++;
  if (gameStetus === 1){
      nextSequence();

  }
  console.log(gameStetus);

});

var userChosenColour = "color";
$(".btn").click(function(){
userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer((userClickedPattern.length-1));
console.log(userClickedPattern);

});

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
    playSound("wrong");

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
  var audio = new Audio("sounds/"+soundKey+".mp3");
  audio.play();
}
