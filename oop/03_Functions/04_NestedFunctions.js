//                          Nested F
// nested f -> f inside another f
// na vsqko izvikvane na wrapper f se syzdava nova nested f

function f() {
  function sum(x, y) {
    return x + y;
  }
  return sum;
}

console.log(f());         // [Function: sum]
console.log(typeof f);    // function
/* eslint-disable */
console.log(f() == f());  // false -> because every time it is new f created
/* eslint-enable */
