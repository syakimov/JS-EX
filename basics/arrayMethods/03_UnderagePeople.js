// Write a function that prints all underaged persons of an array of person
// Use Array#filter and Array#forEach

let neighbourhood = [
  {firstname: 'Aleks' , lastName: 'Petrov' , age: 32, isMale: true},
  {firstname: 'Mariya', lastName: 'Violetova' , age: 12, isMale: false},
  {firstname: 'Mila', lastName: 'Koleva' , age: 16, isMale: false},
  {firstname: 'Tervel', lastName: 'Petrov' , age: 17, isMale: true},
  {firstname: 'Bat Georgi', lastName: 'Vasilev', age: 45, isMale: true},
  {firstname: 'Evlogi', lastName: 'Vutov', age: 22, isMale: true}
];

neighbourhood.filter(x => x.age < 18).forEach((x, i) => {
    console.log(`Пишлеме номер ${i + 1}: ${x.firstname} ${x.lastName} ${x.age} ${x.isMale}`)
});
