// Write a script that finds the biggest of three numbers.
// Use nested if statements

let testArr = ['5', '2', '2'];
// let testArr =  ['-2', '-2', '1'];
// let testArr = ['-2', '4', '3']
// let testArr = ['0', '-2.5', '5']
// let testArr = ['-0.1', '-0.5', '-1.1']

let biggestOfThree = function(arr) {
    let bigger = Math.max(arr[0], arr[1]);
    return Math.max(bigger, arr[2]);
}

console.log(biggestOfThree(testArr));
