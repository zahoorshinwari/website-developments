// jshint esversion:6

// EJS (embeded javascript templating)


const express = require("express");
const bodyParser = require("body-parser");


 
const app = express();
var items = ["Buy Food" , "Cook Food" , "Eat Food"];
var workItems = [];

// it is must to write here 
// if not declare then our app can't work
// it is view engine of ejs which we will use
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

// to add the static files like images and css
app.use(express.static("public") );

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
    // newListItems are the input that are comes from the form input
    res.render("list" , {listTitle: day , newListItems: items});

})


// post request from the browser to server to add this item 
// which are comes from list.ejs file
// and then back send to the browser list item
    app.post("/" , function(req , res){
        
        var item = req.body.newItem;
        
        if(req.body.list === "work"){
            workItems.push(item);
            res.redirect("/work");
        }
        else {
            items.push(item);
            res.redirect("/");
        } 
        
        
    })



    // it is for the /work page
    app.get("/work" , function(req, res){
        res.render("list" , {listTitle: "work List", newListItems: workItems});
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