// jshint esVersion:6

const express = require("express");

const app = express();


// this is first route that we create
app.get("/", function(request , response){
    //  console.log(response);
    //  response.send("hello world");
    //  response.send("<p>here we can creating the webpage that we sending data through by using node js and express js and that can be seen on the webpage</p>");
    //  response.send("https://zahoorshinwari.github.io/Simon-Game/");
    //  response.send("<p>hi how are you. i am learning now the web development this is the express server data.</p>");

    response.send("hello world");
});



// this is second route
app.get("/contact" , function(request , response){
    response.send("contact me at: khanzshinwari5371@gmail.com");
});


// this is third route
app.get("/about" , function(request , response){
    response.send("I'm a web developer. I will design the website for you that you want. I'll be available 24/7 just contact me.");
});


// this is fourth route
app.get("/hobbies" , function(request , response){
    response.send("<ul><li>reading books </li> <li>football</li> <li>coding</li> </ul> ");
});

app.listen(3000 , function(){
    console.log("server started on port 3000");
});