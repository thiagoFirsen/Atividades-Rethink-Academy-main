function eager(a, b) {
  const value = Math.pow(a, 3);
  return value + b;
}

console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));

function eager2(a, b) {
  //Processamento pesado
  const finish = Date.now() + 2500;
  while (Date.now() < finish) {}
  const value = Math.pow(a, 3);
  return value + b;
}

console.time("#1");
console.log(eager2(3, 100));
console.log(eager2(3, 200));
console.log(eager2(3, 300));
console.timeEnd("#1");

function lazy(a) {
  //Processamento pesado
  const finish = Date.now() + 2500;
  while (Date.now() < finish) {}
  const value = Math.pow(a, 3);
  return function (b) {
    return value + b;
  };
}

console.time("#2");
const lazy3 = lazy(3);
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd("#2");
