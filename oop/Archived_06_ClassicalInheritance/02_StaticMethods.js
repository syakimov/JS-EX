function Person(name, age){
    this.name = name;
    this.age = 17;
    // this is very memory consuming
    this.introduce = () => console.log(this.name);
    // this is efficient
    Person.prototype.sayHi = () => console.log(`Hi, I am ${this.name}`);
    // this is static method === Array.isArray
    Person.isAdult = function (age) {
      return (age >= 18);
    };
}

let p = new Person('Yasen', 16);
console.log(Person.isAdult(p.age));

// -----------------------------------------------------------------------------
// prototype vs this закачане на метод
// let p1 = new Person('Asen');
// let p2 = new Person('Ivan');
//
// // when creating f to 'this' it is created for every created object
// console.log(p1.introduce === p2.introduce); // !==
//
// // this is created only for the prototype
// console.log(p1.sayHi === p2.sayHi);         // ===
// -----------------------------------------------------------------------------
