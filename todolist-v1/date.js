//jshint esversion:6

// we can also export more than one fuction to the other file as a module


// it is used to export the function to our app.js file
// module.exports.getDate = getDate;


// function getDate(){
// var today = new Date();

// var options = {
//     weekday : "long",
//     day : "numeric", 
//     month : "long"
// }

// var day = today.toLocaleDateString("en-US" , options);

// return day;
// }


// module.exports.getDay = getDay;
// function getDay(){
//     var today = new Date();
    
//     var options = {
//         weekday : "long",
        
//     }
    
//     var day = today.toLocaleDateString("en-US" , options);
    
//     return day;
//     }


//     console.log(module.exports);





////////////////////////////////////////////////////////////////////////














// it is used to shorted the code
    //jshint esversion:6

// we can also export more than one fuction to the other file as a module


// it is used to export the function to our app.js file
exports.getDate = function (){
const today = new Date();

const options = {
    weekday : "long",
    day : "numeric", 
    month : "long"
}

return today.toLocaleDateString("en-US" , options);


}


exports.getDay = function (){
    const today = new Date();
    
    const options = {
        weekday : "long",
        
    }
    
    return today.toLocaleDateString("en-US" , options);
    }


    console.log(module.exports);
     
     