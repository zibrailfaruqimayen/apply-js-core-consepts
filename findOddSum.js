function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}


// const myNumbers =[12, 65, 45, 78, 32, 45, 91];
// getSumOfAnArray(myNumbers);

// ----------------------------------------------------------


// JS code for even number
// function getOddNumberOfAnArray(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 === 0) {
//             console.log(index, element);
//         }
//     }
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getOddNumberOfAnArray(myNumbers);
// getSumOfAnArray(myNumbers);


// JS code for odd number
function getOddNumberOfAnArray(numbers) {
    const oddNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumberOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumbersSum = getSumOfAnArray(myNumbers);
console.log('odd number sum', oddNumbersSum);