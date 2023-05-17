// create array that has all the colors
var buttonColors = ["red", "blue", "green", "yellow"];


// creating empty array
var gamePattern = [];

// create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

  // Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  // push all the button to the that has the id = userChosenColour to the array userClickedPattern
  userClickedPattern.push(userChosenColour);

  // when any button clicked then it show the name of the color in console in the array
  console.log(userClickedPattern);

});


function nextSequence (){
    // creating the random number
    var randomNumber = Math.floor(Math.random() * 4);
    
    // choose the colors from the above array randomly
    var randomChoosenColor = buttonColors[randomNumber];
    
    // push these random color to the gamePattern array which was empty
    gamePattern.push(randomChoosenColor);

    // Use jQuery to select the button with the same id as the randomChosenColor
    // it is used to give the animation to the buttons that we can selected
    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);


    // it is used to give the sounds to each of the buttons and play them
    var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
    audio.play();
}
