function bmiCalculator(weight , height){
    // math.pow() is used for the power of the value
    var BMI = weight / Math.pow(height , 2);
    // math.round() is used for round off the value
    return Math.round(BMI);
}

var bmi = bmiCalculator(65,1.8);
console.log(bmi); 