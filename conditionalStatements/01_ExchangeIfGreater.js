// Write an if statement that takes two double variables a and b and
// exchanges their values if the first one is greater than the second.
// As a result print the values a and b, separated by a space.

// solution -> exercise immediately executable function

(function(a, b) {
  console.log(a > b ? `${b} ${a}` : `${a} ${b}`);
}(3,5));
