function sumArr(arr) {
    let result;

    if (Array.isArray(arr) && arr.length === 0) {
        result = null;
    } else if (arr === undefined) {
        throw 'No param passed error!';
    } else if (arr.some(x => !isNumber(x))) {
        throw 'Some params are not convertable to Number!';
    } else {
        result = arr.reduce((a, b) => a + b);
    }

    return result;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// console.log(sumArr([]));               // null
// console.log(sumArr());                 // throws error
// console.log(sumArr([1, 2, 'abba']));   // throws error
console.log(sumArr([1, 2, 3]));           // 6
