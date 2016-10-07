// Write a script that asks for a digit (0-9), and depending on the input,
// shows the digit as a word (in English).
// Print not a digit in case of invalid input. Use a switch statement.

let numToWord = (num) => {
  let word = '';

  switch (num) {
    case 0: word = 'zero'; break;
    case 1: word = 'one'; break;
    case 2: word = 'two'; break;
    case 3: word = 'three'; break;
    case 4: word = 'four'; break;
    case 5: word = 'five'; break;
    case 6: word = 'six'; break;
    case 7: word = 'seven'; break;
    case 8: word = 'eight'; break;
    case 9: word = 'nine'; break;

    default: {
      word = 'Not in range [0-9]'
    }
  }

  return word;
};

for (let i = 0; i <= 9; i++) {
  console.log(numToWord(i));
}
