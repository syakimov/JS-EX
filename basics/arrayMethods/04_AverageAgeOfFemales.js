// Write a function that calculates the average age of all females,
// extracted from an array of persons. Use Array#filter

let neighbourhood = [
  {firstname: 'Aleks' , lastName: 'Petrov' , age: 32, isMale: true},
  {firstname: 'Mariya', lastName: 'Violetova' , age: 12, isMale: false},
  {firstname: 'Mila', lastName: 'Koleva' , age: 16, isMale: false},
  {firstname: 'Tervel', lastName: 'Petrov' , age: 17, isMale: true},
  {firstname: 'Bat Georgi', lastName: 'Vasilev', age: 45, isMale: true},
  {firstname: 'Evlogi', lastName: 'Vutov', age: 22, isMale: true}
];

// more efficient
let femails = neighbourhood.filter(x => !x.isMale);

console.log(femails
  .map(f => f.age)
  .reduce((a, b) => a + b) / femails.length);
