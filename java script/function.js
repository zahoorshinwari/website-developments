function lifeRemaining(age){
    var yearsRemaining = 90 - age;
    var weeksRemaining = yearsRemaining * 52;
    var daysRemaining = yearsRemaining * 360;
    var monthsRemaining = yearsRemaining * 12;

    console.log("you have " + daysRemaining + " days, " + weeksRemaining + " weeks and " + monthsRemaining +" months remainigs");


}

lifeRemaining(23);