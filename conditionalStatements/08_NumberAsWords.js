// Write a script that converts a number in the range [0…999] to words,
// corresponding to its English pronunciation.

let numToWord = (num) => {

    let word = '';

    if (Math.floor(num / 100) > 0) {
        word += numToWord(Math.floor(num / 100)) + ' hundred';
        num %= 100;
    }

    if (num > 0) {
        if (word) {
            word += ' and ';
        }

        let zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
          'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
          'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let tens = ['zero', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy',
          'eighty', 'ninety', 'hundred' ];

        if (num < 20) {
            word += zeroToNineteen[num];
        } else {
            word += tens[Math.floor(num / 10)];
            if ((num % 10) > 0) {
                word += '-' + zeroToNineteen[num % 10];
            }
        }
    }

    return word;
};

for (let i = 100; i <= 200; i++) {
    console.log(numToWord(i));
}
