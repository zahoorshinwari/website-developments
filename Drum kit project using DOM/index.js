// it is also same as below but it has some problem in the html file there will be also more 
// and more button then it will apply on all of these.

// var numberOfDrums = document.querySelectorAll(".drum").length;
// for(var i = 0; i<document.querySelectorAll("button").length; i++) {
//         document.querySelectorAll("button")[i].addEventListener("click" , function () {
//         alert("I got clicked.");
//     });
// }





//////////////////////////////////////////////////////////////////
var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfDrums; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click" , function () {    
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        this.style.color = "white";
    });
    
}





