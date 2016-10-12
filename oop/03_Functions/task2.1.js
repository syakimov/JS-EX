function primesInRange(a, b) {
    // helpful f
    let isNum = (n) => !isNaN(parseFloat(n)) && isFinite(n);
    let isPrime = (value) => {
        for (var i = 2; i < Math.sqrt(value) + 1; i++) {
            if (value % i === 0) {
                return false;
            }
        }
        return value > 1;
    }

    // input check
    if (arguments.length < 2) {
        throw 'Param is missing;'
    } else if (!isNum(a) || !isNum(b)) {
        throw 'Not number ex';
    }

    let arr = []
    for (var i = a + 1; i < b; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }

    return arr;
}
// console.log(returnPrimeNumsInRange(1));
// console.log(returnPrimeNumsInRange('a', 2));
console.log(primesInRange(1, 20));
