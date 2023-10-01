const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

// simple addition calculator
// here it will get data from index.html
app.get("/", function(req , res){
    res.sendFile(__dirname + "/index.html");
});

// here we will post some data to server
// perform action on the html elements
app.post("/" , function(req , res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});



// BMI calculator
app.get("/bmiCalculator" , function(req , res){
    res.sendFile(__dirname + "/bmiCalculator.html");

});

app.post("/bmiCalculator" , function(req , res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(height * height);
    res.send("Your BMI is " + bmi);
});




// it will listen for the localhost 3000 request
app.listen(port, function(){
    console.log("Example of calculator on port no  " + port);
})