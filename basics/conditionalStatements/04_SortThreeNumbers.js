// Sort 3 real values in descending order. Use nested if statements.
// Note: Don’t use arrays and the built-in sorting functionality.

let testArr = ['5', '2', '2'];
// let testArr =  ['-2', '-2', '1'];
// let testArr = ['-2', '4', '3']
// let testArr = ['0', '-2.5', '5']
// let testArr = ['-1.1', '-0.5', '-0.1']
// let testArr = ['10', '20', '30']

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

console.log(sortThreeNum(testArr));
