//                       CALL & APPLY
// f.apply and f. call -> ways to execute a f passing diff context
// apply -> pass params as array
// call -> pass params: (x, y, z)
const communicativePersona = {
  name: 'Pesho',
  age: 17,
  introduce: () => {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  },
};

const person = {
  name: 'John',
  age: 31,
};
// |  access the f | exe | give diff context

communicativePersona.introduce.call(person);
