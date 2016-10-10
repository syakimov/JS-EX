// how to create obj

let Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    return Person;
}());

console.log(new Person('John', 3));
