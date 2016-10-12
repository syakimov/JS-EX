//    wannabe closure
let f = (() => {
    let isNum = (n) => !isNaN(parseFloat(n)) && isFinite(n);
    let isPrime = (value) => {
        for (var i = 2; i < Math.sqrt(value) + 1; i++) {
            if (value % i === 0) {
                return false;
            }
        }
        return value > 1;
    }

    return function primesInRange(a, b) {
        if ((arguments.length < 2) || !(isNum(a) || isNum(b))) {
            throw 'Input error';
        }

        let arr = [];

        for (var i = a + 1; i < b; i++) {
            if (isPrime(i)) {
                arr.push(i);
            }
        }
        return arr;
    }
})

console.log(f);
console.log(f());
console.log(`Inner functionality in action: ${f()(1, 20)}`);
