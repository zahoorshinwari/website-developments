// var numberOfBottles = 99;
// while(numberOfBottles >= 0){
//     var bottleWord = "bottle";
//     if(numberOfBottles === 1){
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
//     numberOfBottles--;
//     console.log("No more " + " " + bottleWord + " of beer on the wall");
// }

// fizzbuzz();






////////////////////////////////////////////////
//////// fizzbuzz problem solution /////////////
var output = [];
var count = 1;

function fizzbuzz(){
    while(count <= 100){
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
    
    }
    console.log(output);
}

fizzbuzz();