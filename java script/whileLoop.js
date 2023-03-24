var numberOfBottles = 99;
while(numberOfBottles >= 0){
    var bottleWord = "bottle";
    if(numberOfBottles === 1){
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log("No more " + " " + bottleWord + " of beer on the wall");
}