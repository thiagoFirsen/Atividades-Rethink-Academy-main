const cart = [
  { nameObject: "Caneta", quantity: 10, price: 7.99 },
  { nameObject: "Impressora", quantity: 0, price: 649.5 },
  { nameObject: "Caderno", quantity: 4, price: 27.1 },
  { nameObject: "Lapis", quantity: 3, price: 5.82 },
  { nameObject: "Tesoura", quantity: 1, price: 19.2 },
];

const greatherThan0 = cart.filter((object) => object.quantity > 0);
const greatherThan0Names = cart
  .filter((object) => object.quantity > 0)
  .map((object) => object.nameObject);

console.log(greatherThan0);
console.log(greatherThan0Names);

//Micro desafio - seu proprio filter - Construi a logica, nao um map usando prototype

const arrayPricesGreatherThan0 = [];

for (let i = 0; i < cart.length; i++) {
  if (cart[i].quantity > 0) {
    arrayPricesGreatherThan0.push(cart[i]);
  }
}
console.log(arrayPricesGreatherThan0);
