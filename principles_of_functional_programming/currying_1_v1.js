//Sem currying

function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3));

//Com Currying

function add2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add2(1)(2)(3));

//Teste com arrow function

const add3 = (a) => (b) => (c) => a + b + c;

console.log(add3(1)(2)(3));
