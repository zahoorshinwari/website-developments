
// function fibonacciGenerator(n){
//     var output = [];
//     if (n === 1){
//         output = [0];
//     }
//     else if(n === 2){
//         output = [0,1];
//     }
//     else{
//         output = [0,1];
//         for(var i = 2; i<n; i++){
//             output.push(output[output.length - 2] + output[output.length - 1]);
//         }
//     }

//     return output;
// }

// output = fibonacciGenerator(5);
// console.log(output);



























function fibbonacciGenerator(n){
    var result = [];
    if(n === 1){
        result = [0];
    }else if(n === 2){
        result = [0,1];
    }
    else{
        result = [0,1];
        for(var i = 2; i<n; i++){
        result.push(result[result.length - 2] + result[result.length - 1]);
        }
    }
    return result;
}

result = fibbonacciGenerator(3);
console.log(result);