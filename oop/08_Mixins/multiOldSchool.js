let PrintNameMixin = {
    printName: function() {
        console.log(this._name);
    }
};

class Person {
    constructor(name) {
        this._name = name;
    }
}

Object.keys(PrintNameMixin).forEach(function(prop) {
    console.log('Attaching ' + prop);
    Person.prototype[prop] = PrintNameMixin[prop];
});

let p = new Person('Sam');
p.printName();
