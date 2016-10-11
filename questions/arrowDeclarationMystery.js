//                  solved!
// Arrow f always have empty obj for context
Array.prototype.arrowFunction = () => {
    // always prints {}
    console.log(this);
};

// anonymous f using function declaration have the
// obj from which they are called for context(this)
Array.prototype.anonymousFunction = function() {
    console.log(this);
};

[1, 2, 3].arrowFunction();     // {}
[1, 2, 3].anonymousFunction(); // [1, 2, 3]

[].arrowFunction.call([1, 2, 3]);     // {}
[].anonymousFunction.call([1, 2, 3]); // [1, 2, 3]

// use (_this) => {...} or just use function
