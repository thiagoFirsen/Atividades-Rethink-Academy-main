const cart = [
  { nameObject: "Caneta", quantity: 10, price: 7.99 },
  { nameObject: "Impressora", quantity: 0, price: 649.5 },
  { nameObject: "Caderno", quantity: 4, price: 27.1 },
  { nameObject: "Lapis", quantity: 3, price: 5.82 },
  { nameObject: "Tesoura", quantity: 1, price: 19.2 },
];

const addUp = cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
console.log(addUp);
