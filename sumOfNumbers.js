// 1 + 2 + 3 + 4 + 5 + 6 + 7
// js code of simple sum 
// 
// let sum = 0;
// for(let i = 1; i <= 7; i++){
//     sum = sum + i;
//     console.log(i, sum);
// }

// js code of simple sum with function
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
const sum = sumOfNumbers(50); 
console.log(sum);
//output 1275