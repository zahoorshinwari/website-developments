// var guestList = ["zahoor", "khan", "ali", "arman", "ikram"];
// var insert = prompt("enter the name that you want to search.");
// if(insert === guestList.length){

//     console.log("welcome");
// }else{
//     console.log("sorry we did'nt find.");
// }







// var guestList = ["zahoor", "khan", "ali", "arman", "ikram"];
// var insert = prompt("enter the name that you want to search.");
// // if(insert === guestList.length)
// if(guestList.includes(insert))
// {
//     alert("welcome");
// }else{
//     alert("sorry we did'nt find.");
// }









////////////////////////////////////////////////
//////// fizzbuzz problem solution /////////////
var output = [];
var count = 1;

function fizzbuzz(){
    if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzbuzz");
    }else if(count % 3 === 0){
        output.push("fizz");
    }else if(count % 5 === 0){
        output.push("buzz");
    }else 
    {
        output.push(count)
    }
    
    
    count ++;
    // count = count + 1;
    console.log(output);
}