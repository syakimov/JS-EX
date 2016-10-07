// Write a function that finds the youngest male person in a given array
// of people and prints his full name. Use Array#find

let neighbourhood = [
  {firstname: 'Aleks' , lastName: 'Petrov' , age: 32, isMale: true},
  {firstname: 'Mariya', lastName: 'Violetova' , age: 12, isMale: false},
  {firstname: 'Mila', lastName: 'Koleva' , age: 16, isMale: false},
  {firstname: 'Tervel', lastName: 'Petrov' , age: 17, isMale: true},
  {firstname: 'Bat Georgi', lastName: 'Vasilev', age: 45, isMale: true},
  {firstname: 'Atanas', lastName: 'Vutov', age: 22, isMale: true}
];

// good way
console.log(neighbourhood
  .sort((a, b) => a.age > b.age)
  .find(m => m.isMale));

// good way
// console.log(neighbourhood
//   .filter(x => x.isMale)
//   .sort((a, b) => a.age > b.age)
//   [0]);

// better way
// console.log(neighbourhood
//   .filter(x => x.isMale)
//   .reduce((a, b) => a.age < b.age ?  a:  b));
