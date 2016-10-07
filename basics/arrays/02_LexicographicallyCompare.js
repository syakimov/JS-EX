// Write a program that compares two char arrays lexicographically

let input = ['hello', 'halo'];
// let input = ['food', 'food'];

let comparer =  (arr) =>  {
    let smallerLength = Math.min(arr[0].length, arr[1].length);

    for (var i = 0; i < smallerLength; i++) {
        if (arr[0][i] > arr[1][i]) {
            return '>';
        }else if (arr[0][i] < arr[1][i]) {
            return '<';
        }
    }
    return '=';
}

console.log(comparer(input));
