
// for(var numberOfBottles = 99; numberOfBottles >= 0; numberOfBottles--){
//     var bottleWord = "bottle";
//     if(numberOfBottles === 1){
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
    
//     console.log("No more " + " " + bottleWord + " of beer on the wall");
// }



//////// fizzbuzz problem solution /////////////
var output = [];


function fizzbuzz(){
    for(var count = 1; count <= 100; count ++){
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
    }
    console.log(output);
}

fizzbuzz();