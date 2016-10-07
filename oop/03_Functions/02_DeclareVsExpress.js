//                 f declaration Vs expression
// declaration -> available everywhere
prtintMyName('Yasen'); // available here

function prtintMyName(name){
  console.log(name);
} ;

// expression -> available only after it`s decl.
// f('Help!!'); -> will not work here.
let f = function (msg) {
  console.log(msg);
}
