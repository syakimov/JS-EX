// Write a function that groups an array of persons by first letter of first
// name and returns the groups as a JavaScript Object

let neighbourhood = [
  {firstname: 'Aleks' , lastName: 'Petrov' , age: 32, isMale: true},
  {firstname: 'Mariya', lastName: 'Violetova' , age: 12, isMale: false},
  {firstname: 'Mila', lastName: 'Koleva' , age: 16, isMale: false},
  {firstname: 'Tervel', lastName: 'Petrov' , age: 17, isMale: true},
  {firstname: 'Bat Georgi', lastName: 'Vasilev', age: 45, isMale: true},
  {firstname: 'Atanas', lastName: 'Vutov', age: 22, isMale: true}
];

// this solution was taken from:
// https://github.com/svetlai/TelerikAcademy/blob/master/Web-Design-and-UI/JavaScript-Fundamentals/09-Array-Methods/scripts/9-js-hw-array-methods.js

let result = neighbourhood.reduce((groups, person) => {
   if (groups[person.firstname[0]]){
       groups[person.firstname[0]].push(person);
   }else {
       groups[person.firstname[0]] = [person]
   }

   return groups;
}, {})

console.log(result);
