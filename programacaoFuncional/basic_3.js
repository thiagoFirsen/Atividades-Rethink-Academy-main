//Arrow functions

const sayGoodNight = () => console.log("Boa noite");
sayGoodNight();

const greeting = (namePerson) => `Fala ${namePerson}`;
console.log(greeting("Thiago"));

const add = (...numbers) => {
  console.log(Array.isArray(numbers));
  let total = 0;
  for (let i of numbers) {
    total += i;
  }
  return total;
};

console.log(add(1, 2, 3, 4, 5));

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Desafio

const power = (base) => (exp) => Math.pow(base, exp);
console.log(power(2)(8));
