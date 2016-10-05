// Write a script that shows the sign (+, - or 0) of the product of three real numbers,
// without calculating it. Use a sequence of if operators.

let testArr = ['1', '2', '3']; // +
// let testArr = ['3', '-4', '2']; // -
// let testArr = ['3', '4', '0'];  // 0

let threeNumProductSign = function(arr) {
    let counter = 0;

    for (let i = 0; i <= 2; i++) {
        if (+ arr[i] < 0) {
            counter++;
        } else if (+ arr[i] === 0) {
            return '0';
        }
    }
    return (counter % 2 == 0)
        ? '+'
        : '-';
};

console.log(threeNumProductSign(testArr));
