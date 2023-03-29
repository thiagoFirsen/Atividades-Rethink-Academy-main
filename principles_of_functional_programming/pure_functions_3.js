//Funçao Impura

let numberOfRuns = 0;

function add(a, b) {
  numberOfRuns++;
  return a + b;
}
console.log(add(68, 31));
console.log(add(68, 31));
console.log(add(68, 31));
console.log(add(68, 31));
console.log(add(68, 31));
console.log(numberOfRuns);
