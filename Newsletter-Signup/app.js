// jshint eversion: 6


const express = require("express");
const bodyParser = require("body-parser");
const request = require("request"); 


const app = express();

// include the static file (images and css) to our site using this method
// add the static file (images and css) to public folder
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));


// when user come to root page then show the html interface
app.get("/" , function(req , res){
    res.sendFile(__dirname + "/signup.html");
});

// take data from html file 
app.post("/" , function(req , res){
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

    console.log(firstName , lastName , email);
})

  


app.listen(3000 , function(){
    console.log("server is running on port 3000");
})