// jshint esVersion:6

const express = require("express");

const app = express();

app.get("/", function(request , response){
    //console.log(response);
    //response.send("hello world");
    //response.send("<p>here we can creating the webpage that we sending data through by using node js and express js and that can be seen on the webpage</p>");

    response.send("https://zahoorshinwari.github.io/Simon-Game/");
});

app.listen(3000 , function(){
    console.log("server started on port 3000");
});