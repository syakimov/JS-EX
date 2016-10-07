// Implement a javascript function that accepts an array of
// floating-point numbers as strings and returns the minimal,
// the maximal number, the sum and the average of all numbers (displayed
// with 2 digits after the decimal point).

let testArr = ['2', '5', '1'];

let sortThreeNum = (arr) => {
    arr = arr.map(Number);
    let temp = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length - 1; k++) {
            if (arr[k] < arr[k + 1]) {
                temp = arr[k + 1];
                arr[k + 1] = arr[k];
                arr[k] = temp;
            }
        }
    }

    return arr;
};

let arr = sortThreeNum(testArr);

// arr min is the last element, as it is sorted desc
// having trouble to use toFixed(2) in the interpolation
// console.log(`min=${parseFloat(arr[arr.length - 1]).toFixed(2)}`);
let min = parseFloat(arr[arr.length - 1]).toFixed(2);
console.log(`min=${min}`);

// funny here there is no problem
console.log(`max=${arr[0].toFixed(2)}`);

let sum = 0;
arr.forEach(x => sum += x);

console.log(`sum=${sum.toFixed(2)}`);
console.log(`avg=${(sum / arr.length).toFixed(2)}`);
