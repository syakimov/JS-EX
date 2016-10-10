// //                               Closure
// // outer is the model, basicly a ctor
// function outer(x) {
//    return function inner(y) {
//        // Closure -> the ability of a f to access and save var in its scope
//        return x + y;
//    };
// }
//
// // here we create a var that keeps the val of x
// let func = outer(5);
// // when printed we get the returned 'inner' f
// console.log(func);
// // when executed it adds the given val of y with the existing x
// console.log(func(6)); // 11

// -------------------------------------------------------------------------
// //                        Basic Closure example
// // dokato func jivee, celiq i scope (prop, var, f) sushto se zapazva v pametta
// // f add and list are accessible as long as db is in scope
//
// let db = (function(){
//    let objs = []; // private prop of f db
//
//    function add(obj){ // prov add() API
//        objs.push(obj);
//    }
//    function list(){   // prov access to objs
//        return objs.slice(); // returns new arr to avoid ref mess-ups
//    }
//    return { add: add, list: list}; // returns this obj
// }()) ;
//
// db.add('first input');
// db.add('second input');
//
// console.log(db.list());
