// create array that has all the colors
var buttonColors = ["red", "blue", "green", "yellow"];


// creating empty array
var gamePattern = [];


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
