

// using ready method and function to run jQuery
 $(document).ready(function(){
 $("h1").css("color", "green");
});


// using dollar sign to apply jquery
 $("h1").css("font-size", "5rem");

// writing jquery to apply jquery on elements or tags (also apply css using jquery)
 jQuery("h1").css("color", "blue");



// adding class
$("h1").addClass("title-heading margin");
$("h1").css("font-size", "10rem"); 

// removing class
// $("h1").removeClass("title-heading");




// to check that the class is apply on it or not
$("h1").hasClass("title-heading");

$("h1").css("font-size", 10rem);









// changing text of the element

// $("h1").text("bye");
// $("button").text("Don't Click Me");
// $("button").html("<em>I am a button</em>");
// $("h1").html("<p>there is changing the h1 into paragraph</p>");











// changing attributes values using jquery
// src is the attribute and the tom2.png is the image that we want to add with it.
// $("img").attr("src", "images/tom2.png");


// change the link of the anker from google to yahoo
// $("a").attr("href", "https://www.yahoo.com");


// give the class to h1 and set the style to it.
// $("h1").attr("class", "title-heading margin")











// adding eventListener of click functionality to the elements using jQuery
// $("button").click(function(){
//     $("h1").css("color", "red");
//     $("h1").addClass("title-heading margin");
// })



// using simple java script
// for(var i = 0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "pink";
//     });
// }






// adding eventlistener of keypress functionality to the element using jQuery
// $("input").keypress(function(event) {
//     console.log(event.key);
// })



// whole document

// $("body").keypress(function(event) {
//     console.log(event.key);
// })





// task( when click the button from keyboard then it can show instead of h1)
// $("input").keypress(function(event){
//     $("h1").text(event.key);
// })


// whole document
// $("body").keypress(function(event){
//     $("h1").text(event.key);
//     $("h1").css("font-size", "3rem");
// })









// mouse come over on element and change it's color or text
// $("h2").on("mouseover", function(){
//     $("h2").css("color", "red");
//     $("h2").text("mouse come over and text are change");
// })




// mouse click on element and change it's color or text
$("h3").on("click", function(){
    $("h3").text("I am clicked now and i am changed");
    $("h3").css("font-size", "5rem");
})






// adding and removing element with jQuery
// $("h5").before("<button>Before</button>");
// $("h5").after("<button>After</button>");
// $("h5").prepend("<button>Prepend</button>");
// $("h5").append("<button>Append</button>");
// to remove all the button that we added to it
// $("button").remove();






// adding class to h5
// $("h5").addClass("size");
// $("h5").text("this is heading no 5");
// $("h5").on("mouseover", function(){
//     $("h5").css("font-size", "7rem");
// })
// $("h5").on("click", function(){
//     $("h5").text("i was changed because of clicked");
//     $("h5").css("color", "red");
// })











// adding some animation using jquery
// $("button").on("click", function(){
//     $("h1").hide();
//     // $("h1").show();
// })

// toggle the button
// $("button").on("click", function(){
//     $("h1").toggle();
// })



// fadeout , fadeIn , fadeToggle 
$("button").on("click", function(){
    // $("h1").fadeOut();
    // $("h1").fadeIn();
     $("h1").fadeToggle();
})




// click image then slide up , slide down , and slideToggle
$("img").on("click", function(){
     // $("h1").slideUp();
     // $("h1").slideDown();
     $("h1").slideToggle();
})







// giving some custom css as a animation using jquery
// $("button").on("click", function(){
//     // inside the curly braces only write the numeric values
//     $("h1").animate({opacity:0.5 });
//     $("h1").animate({margin : 20 });
//     $("h1").animate({margin : "20%" });
  
// })

// apply animation using different method
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5 });
  
})
