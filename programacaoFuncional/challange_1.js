//1
function add(number1) {
  return function (number2) {
    return function (number3) {
      return number1 + number2 + number3;
    };
  };
}

console.log(add(3)(4)(5));

//2
function calculate(number1) {
  return function (number2) {
    return function (fn) {
      if (typeof fn === "function") {
        return fn(number1, number2);
      }
    };
  };
}

console.log(
  calculate(3)(4)(function addNumbers(number1, number2) {
    return number1 + number2;
  })
);
