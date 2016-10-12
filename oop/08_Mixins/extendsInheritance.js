class Mammal {
    constructor(gender) {
        this._gender = gender;
    }
    suckle(mum) {
        console.log(`${mum}, I want milk!`);
    }
}

class Person extends Mammal {
    constructor(name, gender) {
        // call the parent ctor, always use it before 'this'
        super(gender);
        this._name = name;
    }

    suckle(mum) {
        super.suckle(mum); // call the base method
        console.log('NOW!!!'); // extend the base method
    }
    speak() {
        console.log('I am homosapien.')
    }
}

let p = new Person('Stoyan', 14);
console.log(p);
p.suckle('Mariika');

// protoChain === {}.toString -> Mammal -> Person
console.log(p.toString());

// JS supports multiple inheritance
// forEach all the features of the parents PROTOTYPES and
// add them in an buffer class. Inherit the buffer class.
