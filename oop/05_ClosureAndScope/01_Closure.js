//                               Closure
// function outer(x) {
//     return function inner(y) {
//         // Closure -> the ability of a f to access and save var in its scope
//         return x + y;
//     };
// }
//
// let func = outer(5);
// console.log(func);
// console.log(f(6));

// -------------------------------------------------------------------------
//                        Basic Closure example
// dokato func jivee, celiq i scope sushto se zapazva v pametta
// f add and list are accessible as long as db is in scope

// let db = (function(){
//     let objs = []; // private prop of func db
//
//     function add(obj){
//         objs.push(obj);
//     }
//     function list(){
//         // return objs; -> this returns an arr, but it is ref type
//         return objs.slice(); // returns new arr
//     }
//     return { add: add,
//              list: list};
// }()) ;
//
// db.add('first input');
// db.add('second input');
// console.log(db.list());


// -------------------------------------------------------------------------
//                          Chaining
let db = (function(){
    let objs = []; // private prop of func db
    let result;

    function add(obj){
        objs.push(obj);
        return result;
    }
    function list(){
        // return objs; -> this returns an arr, but it is ref type
        return objs.slice(); // returns new arr
    }
    result = {
      add: add,
      list: list
    };

    return result;
}()) ;

db.add('first input')
    .add('second input')
    .add('third input');
console.log(db.list());

// -------------------------------------------------------------------------
//                          Using this
// let db = (function(){
//     let objs = [];
//
//     function add(obj){
//         objs.push(obj);
//         return this; // a bit confusing
//     }
//     function list(){
//         return objs.slice();
//     }
//     return { add: add,
//              list: list};
// }()) ;
//
// db.add('first input')
//     .add('second input')
//     .add('third input');
// console.log(db.list());
