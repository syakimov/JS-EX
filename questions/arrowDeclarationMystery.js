// why does this does not work,
Array.prototype.remove1 = () => {
    console.log(this);
};

// but this does?
Array.prototype.remove2 = function() {
    console.log(this);
};

[1, 2, 3].remove1();
[1, 2, 3].remove2();
