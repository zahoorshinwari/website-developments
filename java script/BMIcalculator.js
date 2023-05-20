function bmiCalculator(weight , height){
    // math.pow() is used for the power of the value
    var BMI = weight / Math.pow(height , 2);
    // math.round() is used for round off the value
    return Math.round(BMI);
}

var bmi = bmiCalculator(64,1.65);
if(bmi <= 25){
    console.log(bmi + "\n body mass index is normal");
}
else{
    console.log(bmi +  "\n body mass index is over weighted");
}

 