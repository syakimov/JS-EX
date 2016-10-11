class Person {
    constructor(firstName, age) {
        this._firstName = firstName;
        this._age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    birthday() {
        this._age++;
    }
}

let p = new Person('Stamat', 20);
p.birthday();

console.log(p.age);

p.age = 5; // access the field using prop
console.log(p.age);
