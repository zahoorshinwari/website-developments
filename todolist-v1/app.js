// jshint esversion:6

// EJS (embeded javascript templating)


const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// it is must to write here 
// if not declare then our app can't work
// it is view engine of ejs which we will use
app.set('view engine', 'ejs');

app.get("/" ,  (req , res) =>  {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    
    switch(currentDay){
        case 0:
            day = "sunday"
            break;
            case 1:
            day = "monday"
            break;
            case 2:
            day = "tuesday"
            break;
            case 3:
            day = "wednesday"
            break;
            case 4:
            day = "thursday"
            break;
            case 5:
            day = "friday"
            break;
            case 6:
            day = "saturday"
            break;
            default:
                console.log("Error: current day is equal to : " + currentDay);
    }
    // use.rendor can use the view engine
    // it can load the list.ejs file to view engine 
    res.render("list" , {kindOfDay: day});

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