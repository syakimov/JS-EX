function Person(name, age){
    this.name = name;
    this.age = 17;
    // this is very memory consuming
    this.introduce = () => console.log(this.name);
    // this is efficient
    Person.prototype.sayHi = () => console.log(`Hi, I am ${this.name}`);

    Person.isAdult = () => return age >= 18;
}

let p1 = new Person('Asen');
let p2 = new Person('Ivan');

// when creating f to 'this' it is created for every created object
console.log(p1.introduce === p2.introduce); // !==

// this is created only for the prototype
console.log(p1.sayHi === p2.sayHi);         // ===

// this looks like C#, prototype -> JS
// this can hide data
// prototype has better performance
