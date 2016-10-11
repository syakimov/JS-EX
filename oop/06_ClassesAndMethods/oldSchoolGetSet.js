class Person {
    constructor(firstName, age) {
        this._firstName = firstName;
        this.age = age;
    }

    birthday() {
        this.age++;
    }
}

Object.defineProperty(Person, 'age', {
  get: function () {
    return this._age;
  },
  set: function (value) {
    this._age = value;
  }
});

let p = new Person('Stamat', 20);
p.birthday();

console.log(p.age);

p.age = 5; // access the field using prop
console.log(p.age);
