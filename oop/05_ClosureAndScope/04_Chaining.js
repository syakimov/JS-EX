//                          Chaining
let db = (function(){
    let objs = [];
    let result;

    function add(obj){
        objs.push(obj);
        return result;
    }
    function list(){
        return objs.slice();
    }
    result = {
      add: add,
      list: list
    };

    return result;
}()) ;

// chaining is poss, cause add not only pushes new item,
// but also returns the result {} that prov API
db.add('first input')
    .add('second input')
    .add('third input');
console.log(db.list());

// -------------------------------------------------------------------------
//                          Using this
// same result but it is more confusing
//
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
