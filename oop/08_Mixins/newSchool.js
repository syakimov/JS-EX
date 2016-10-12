let PrintNameMixin = function(Base) {
    return class Name extends Base {
        printName() {
            console.log(this._name);
        }
    };
};

class Person extends PrintNameMixin {
    constructor(name) {
        this._name = name;
    }
}

let p = new Person('Sam');
p.printName();
