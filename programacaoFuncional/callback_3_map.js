const numbers = [1, 2, 3, 4, 5];

const double = (n) => n * 2;
console.log(numbers.map(double));

const names = ["Ana", "Bia", "Gui", "Lia", "Rafa"];
const firstLetter = (text) => text[0];

console.log(names.map(firstLetter));

//Micro desafio - Array so com os nomes, -Quantidade * preco
const cart = [
  { nameObject: "Caneta", quantity: 10, price: 7.99 },
  { nameObject: "Impressora", quantity: 0, price: 649.5 },
  { nameObject: "Caderno", quantity: 4, price: 27.1 },
  { nameObject: "Lapis", quantity: 3, price: 5.82 },
  { nameObject: "Tesoura", quantity: 1, price: 19.2 },
];

const takeOnlyNames = cart.map((object) => object.nameObject);
console.log(takeOnlyNames);
const getFinalPrice = cart.map((object) => object.quantity * object.price);
console.log(getFinalPrice);

//Micro desafio - seu proprio map - Construi a logica, nao um map usando prototype

const arrayNames = [];
for (let i = 0; i < cart.length; i++) {
  arrayNames.push(cart[i].nameObject);
}
console.log(arrayNames);
