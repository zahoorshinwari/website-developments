var a = 2;
var b = "2";
// two == equal can't check the datatypes if equal then equal
if(a == b){
    console.log("yes");
}
else
{
    console.log("no");
}

// three === equal can check the datatypes of variable
if(a === b){
    console.log("yes");
}
else
{
    console.log("no");
}








//////////// combining comparator ////////////////

// prompt("what is your name?");
// prompt("who is your crush?");

// var loveScore = Math.random() * 100 ;
// loveScore = Math.floor(loveScore) + 1;
// if(loveScore > 70){
//     alert("your love score is " + loveScore + "%" + ", you love more with each other.");    
// }
// if(loveScore <= 70 && loveScore >= 30)
// {
//     alert("your love score is " + loveScore + "%");
// }

// if(loveScore < 30)
// {
//     alert("your love score is " + loveScore + "%" + " They will breakup!");
// }






// year divide by 4 is leap year 
// year divide by 100 is not leap year
// year divide by 400 is leap year


function isLeapyear(){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                console.log("leap year");
            }else{
                console.log("not leap year");
            }
        }else{
            console.log("leap year")
        }
    }else{
        console.log("not leap year");
    }
}