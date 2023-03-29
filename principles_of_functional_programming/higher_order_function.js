function exec(fn, ...params) {
  return fn(...params);
}

function add(a, b, c) {
  return a + b + c;
}

function multiply(a, b) {
  return a * b;
}

const r1 = exec(add, 4, 5, 6);
const r2 = exec(multiply, 30, 40);

console.log(r1, r2);

function exec2(fn, ...params) {
  return function (text) {
    return `${text} ${fn(...params)}`;
  };
}

const r3 = exec2(add, 4, 5, 6)("O resultado da soma é: ");
console.log(r3);
