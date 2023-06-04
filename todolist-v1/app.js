// jshint esversion:6

// EJS (embeded javascript templating)


const express = require("express");
const bodyParser = require("body-parser");

const app = express();




var items = ["Buy Food" , "Cook Food" , "Eat Food"];

// it is must to write here 
// if not declare then our app can't work
// it is view engine of ejs which we will use
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));


app.get("/" , function (req , res)  {
    
    var today = new Date();

    var options = {
        weekday : "long",
        day : "numeric", 
        month : "long"
    }

    var day = today.toLocaleDateString("en-US" , options);

        // use.rendor can use the view engine
    // it can load the list.ejs file to view engine 
    res.render("list" , {kindOfDay: day , newListItems: items});

})


// post request from the browser to server to add this item 
// which are comes from list.ejs file
// and then back send to the browser list item
    app.post("/" , function(req , res){
        var item = req.body.newItem;
        
        items.push(item);

        res.redirect("/");
    })



app.listen(3000, ()=> console.log("server started on port 3000"));
































// use this if else or the switch statment
// app.get("/" ,  (req , res) =>  {
//     var today = new Date();
//     var currentDay = today.getDay();
//     var day = "";
//     if(currentDay === 6){
//         day = "saturday";
//     }
//     else if(currentDay === 0){
//         day = "sunday";
//     }
//     else if(currentDay === 1){
//         day = "monday";
//     }  
//     else if(currentDay === 2){
//         day = "tuesday";
//     }  
//     else if(currentDay === 3){
//         day = "wednesday";
//     }    
//     else if(currentDay === 4){
//         day = "thursday";
//     }  
//     else if(currentDay === 5){
//         day = "friday";
//     } 