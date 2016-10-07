// Write a function that checks if an array of person contains
// only people of age (with age 18 or greater)

let underAgedPersonAmong = [
  {firstname: 'Aleks' , lastName: 'Petrov' , age: 32, isMale: true},
  {firstname: 'Mariya', lastName: 'Violetova' , age: 12, isMale: false},
  {firstname: 'Georgi', lastName: 'Vasilev', age: 45, isMale: true},
  {firstname: 'Evlogi', lastName: 'Vutov', age: 22, isMale: true}
];

let adults = [
  {firstname: 'Aleks' , lastName: 'Petrov' , age: 32, isMale: true},
  {firstname: 'Mariya', lastName: 'Violetova' , age: 18, isMale: false},
  {firstname: 'Georgi', lastName: 'Vasilev', age: 45, isMale: true},
  {firstname: 'Evlogi', lastName: 'Vutov', age: 22, isMale: true}
];

console.log(underAgedPersonAmong.some(x => x.age < 18));
console.log(adults.some(x => x.age < 18));

// print the arr
// underAgedPersonAmong.forEach(x => {
//    console.log(`${x.firstname} ${x.lastName} ${x.age} ${x.isMale}`)
// });


// C# way
// console.log(underAgedPersonAmong.filter(x => x.age < 18).length > 0 ?
//   'there are underaged people' :
//   'all people can legally drink alcohol');
//
// console.log(adults.filter(x => x.age < 18).length > 0 ?
//   'there are underaged people' :
//   'all people can legally drink alcohol');
