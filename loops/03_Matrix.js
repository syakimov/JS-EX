// Write a javascript function that prints a matrix like in the examples
// below by a given integer N. Use two nested loops.
// * Challenge: achieve the same effect without nested loops.

// 1 2 3 4
// 2 3 4 5
// 3 4 5 6
// 4 5 6 7

(function(n) {
    let output = '';
    for (let row = 1; row <= n; row++) {
        for (let col = row; col < row + n; col++) {
            output += col + ' ';
        }
        output += '\n';
    }

    console.log(output);
}(4));
