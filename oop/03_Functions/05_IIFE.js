//                            IIFE
// IIFE -> Immediately invoiked Function Execution
// grupira promenlivite
// pravi gi private
// does not polute the global scope

// module -> IIFE that returns {}
let generator = function(){
  let id = 0; // this is private
  return {
    getNextId: function(){
      return id++;
    }
  } // this is called a module
}();

// we get the next id, but id itself is private
// id = 10; // will not work
console.log(generator.getNextId());
