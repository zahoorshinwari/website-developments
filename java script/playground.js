
/////////// variables ////////////////
var a = "5";
var b = "10";
var c = a;
a = b;
b = c;
console.log("value of a :" + a);
console.log("value of b :" + b);



/////////////////// strings /////////////////////
/////////////////////////////////////////////////////////////
// concatenation of string

//var tweet = prompt("compose your tweet");
// alert("you have written " + tweet.length + " characters," + " you have " + (150-tweet.length) + " remaining characters");

////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////
// it is used for word.slice

// var tweet = prompt("compose your tweet");
// var tweetUnder150 = tweet.slice(0,150);
// alert(tweetUnder150);

////////////////////////////////////////////////////////////




///////////////////////////////////////
// to capatilize the first character in the prompt and alert


// 1 create the variable that store the name enter using prompt
//var name = prompt("what is your name");
// 2 capatilize the first letter of their name
// a isolate the first letter
//var firstChar = name.slice(0,1);
// b turn the first character to upper toUpperCase
//var upperCaseFirstChar = firstChar.toUpperCase();
// c isolate the rest of the name
//var restOfname = name.slice(1,name.length);
// d to convert all the character after the first character
//var restOfname =restOfname.toLowerCase();
// e concatenate the first character with the rest of the character
//var capitalListName = upperCaseFirstChar + restOfname;

//alert("hello " + capitalListName);

////////////////////////////////////////////////




///////////// numbers //////////////////////

// var dogAge = prompt("enter your dog age :");
// var humanAge = ((dogAge - 2) * 4) + 21;
// alert("your dog is " + humanAge + " years old in human years");
////////////////////////////////////////////////




////////////// function ///////////////////////

function getMilk() {
    console.log("Leave house");
    console.log("move left");
    console.log("move left");
    console.log("move up");
    console.log("move up");
    console.log("move up");
    console.log("move up");
    console.log("move up");
    console.log("move up");
    console.log("move right");
    console.log("move right");
    console.log("buy milk");
    console.log("move left");
    console.log("move left");
    console.log("move down");
    console.log("move down");
    console.log("move down");
    console.log("move down");
    console.log("move down");
    console.log("move down");
    console.log("move right");
    console.log("move right");
}

getMilk();
//////////////////////////////////////////////////