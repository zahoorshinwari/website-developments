// var houseKeeper1 = {
//     name : "kani",
//     age : 23 , 
//     experience : 5 ,
//     language : ["english", "spanish", "urdu"]
    
// }

// console.log(houseKeeper1);


// it is constructor function
// function BellBoy (name, age, experience, language){
//     this.name = name;
//     this.age = age;
//     this.experience = experience;
//     this.language = language;
// }


// var bellBoy1 = new BellBoy("ali", 23, 3, ["pashto", "urdu"]);
// var bellBoy2 = new BellBoy("ikram", 27, 6, ["arabi", "english"]);
// var bellBoy3 = new BellBoy("umar", 26, 5, ["spanish", "french"]);
// console.log(bellBoy1);
// console.log(bellBoy2);
// console.log(bellBoy3);







// adding the function to the objects
function BellBoy (name, age, experience, language){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.language = language;
    this.clean = function(){
        console.log("cleaning the progress....");
        // alert("cleaning in progress....");
    }
}

var bellBoy1 = new BellBoy("ali", 23, 3, ["pashto", "urdu"]);
console.log(bellBoy1.clean());