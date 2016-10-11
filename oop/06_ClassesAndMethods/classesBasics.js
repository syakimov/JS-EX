class Horse {
    // f syntax
    constructor(name, furColor, age) {
        // this -> ref to the current instance of the obj
        // use '_' -> means private (do not use regardless if it is accessible)
        this._name = name;
        this._furColor = furColor;
        this._age = age;
    }
}

// creates new obj and calls its constructor
let horse = new Horse('Vihrogon', 'brown', 2);
console.log(horse);
// Horse { _name: 'Vihrogon', _furColor: 'brown', _age: 2 }
