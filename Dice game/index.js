var randomNumber1 = Math.floor(Math.random() * 6) + 1;// create rondom number from 1 to 6

var randomDiceImages = "dice" + randomNumber1 + ".png";// take the images from image1 to image6

var randomImageSource = "images/" + randomDiceImages ;// proved the source that where are the images from image1 to image6

var image1 = document.querySelectorAll("img")[0];// here we can select all the images and put into the image1

image1.setAttribute("src" , randomImageSource);// here we can set the random images in the source tha can take by it self


// randomize the image no 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);




// if player 1 win

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}