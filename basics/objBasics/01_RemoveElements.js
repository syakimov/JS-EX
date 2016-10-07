// Write a function that removes all elements with a given value. Attach it to
// the array type. Read about prototype and how to attach methods.

Array.prototype.remove = function(element) {

    for (let i = this.length; i >= 0; i--) {
        if (this[i] === element) {
            this.splice(i, 1);
        }
    }
};

let arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];

console.log(arr);
arr.remove(1)
console.log(arr);
