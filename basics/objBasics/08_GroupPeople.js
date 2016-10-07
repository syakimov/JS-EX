// Write a function that groups an array of people by age. The function must
// return an associative array, with keys - the groups, and values - arrays with
// people in this groups Use function overloading (i.e. just one function)

let people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'John', lastname: 'Doe', age: 42 },
  { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
  { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
  { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

function group(arr) {
    let dic = {};

    for (let p of people) {
        if (!dic[p.age]) {
            dic[p.age] = [];
        }

        dic[p.age].push(p);
    }

    return dic;
}

console.log(group(people));

//                         OUTPUT
// {
//   '22': [
//     { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
//     { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
//   ],
//   '32': [
//     { firstname: 'Gosho', lastname: 'Petrov', age: 32 }
//   ],
//   '42': [
//     { firstname: 'John', lastname: 'Doe', age: 42 }
//   ],
//   '81': [
//     { firstname: 'Bay', lastname: 'Ivan', age: 81 },
//     { firstname: 'Asdf', lastname: 'Xyz', age: 81 }
//   ]
// }
