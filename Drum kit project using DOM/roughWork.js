//    change the innerHTML
//     $0;
// <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​
// $0.innerHTML = "zahoorScript";
// 'zahoorScript' 






//        adding eventListener to the element
// $0.addEventListener("click" , function(){
//     console.log("i got clicked")
// });
// undefined
// 2VM818:2 i got clicked 








//  passing the values to the function


    // function calculator(num1, num2){
    //     return num1 + num2;
    // }

    // var result = calculator(4, 5);
    // console.log(result);

    // function calculator(num1, num2){
    //     return num1 * num2;
    // }

    // var result = calculator(4, 5);
    // console.log(result);




    // debugger checking that from where the function is called?
    
            // high order function


    // function add(num1, num2){
    //     return num1 + num2;
    // }
    // undefined
    // function add(num1, num2){
    //     return num1 + num2;
    // } 
    // undefined
    // function add(num1, num2){
    //     return num1 + num2;
    // } 
    
    // function mul(num1, num2){
    //     return num1 * num2;
    // } 
    
    // function calculator(num1, num2, operator){
    //     return operator(num1, num2);
    // }
    // undefined
    // calculator(4,5, add);
    // 9
    // calculator(4,5, mul);
    // 20
    // debugger;
    // debugger calculator(3,4,add);
    // VM715:1 Uncaught SyntaxError: Unexpected identifier 'calculator'
    //     at <anonymous>:1:1
    // (anonymous) @ VM596:1
    // debugger; calculator(3,4,add);
    // 7
    // undefined
    // debugger;
    // debugger;
    // calculator(3,4,add);
    // 7
    // debugger;
    
    // calculator(3,4,add);
    // 7
    // undefined
    // debugger;
    // calculator(4,5,mul);
    











    // function that we can pass multiple other function as a parameter
    // function are called the higher order function
    function add(num1, num2){
        return num1 + num2;
    }

    function mul(num1, num2){
        return num1 * num2;
    }

    function divide(num1, num2){
        return num1/num2;
    }

    function subtract(num1, num2){
        return num1 - num2;
    }

    function calculator(num1, num2, operator){
        return operator(num1, num2);
    }

    var result = calculator(3,5, add);
    console.log(result);

    // var result = calculator(3,5, mul);
    // console.log(result);

    // var result = calculator(3,5, divide);
    // console.log(result);

    
    // var result = calculator(3,5, subtract);
    // console.log(result);













