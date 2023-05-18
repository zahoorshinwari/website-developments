

// create array that has all the colors
var buttonColor = ["red", "blue", "green", "yellow"];


// creating empty array
var gamePattern = [];

// create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

  // Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColor = $(this).attr("id");

  // push all the button to the that has the id = userChosenColour to the array userClickedPattern
  userClickedPattern.push(userChosenColor);


 // In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
  playSound(userChosenColor);

  animatePress(userChosenColor);

  // when any button clicked then it show the name of the color in console in the array
  console.log(userClickedPattern);

});


function nextSequence (){
    // creating the random number
    var randomNumber = Math.floor(Math.random() * 4);
    
    // choose the colors from the above array randomly
    var randomChosenColor = buttonColor[randomNumber];
    
    // push these random color to the gamePattern array which was empty
    gamePattern.push(randomChosenColor);

    // Use jQuery to select the button with the same id as the randomChosenColor
    // it is used to give the animation to the buttons that we can selected
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);


    // Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(randomChosenColor);
    
    
   
}

// Create a new function called playSound() that takes a single input parameter called name.
function playSound(name){


     // it is used to give the sounds to each of the buttons and play them
     var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
}



//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor){

    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#" + currentColor).addClass("pressed");
    
    
    // how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    } , 100);

}


