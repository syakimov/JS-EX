// Ctor for person
function createPerson(firstName, lastName, age, gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender
    };
};

console.log(createPerson('Minerva', 'Evdokieva', 99, 'f'));
