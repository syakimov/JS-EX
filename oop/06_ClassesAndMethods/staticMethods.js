class Car {
  constructor(engine, engineSound) {
    this._engine = engine;
    this._engineSound = engineSound;
  }

  makeSomeNoise(){
    console.log(this._engineSound);
  }

  // new to ES6
  static upgradeEngine(car){
    car._engine += 50;
  }

  static race(car1, car2){
    car1._engine > car2._engine ? car1.makeSomeNoise() : car2.makeSomeNoise();
  }
}

// let c = new Car(350, 'brummmm');
// console.log(c);
//
// Car.upgradeEngine(c);
// console.log(c);

Car.race(new Car(100, 'bbbbbbrrum'), new Car(450, 'rrrrrr'));
