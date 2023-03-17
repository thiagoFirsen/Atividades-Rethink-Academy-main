const cart = [
  { nameObject: "Caneta", quantity: 10, price: 7.99, fragile: true },
  { nameObject: "Impressora", quantity: 1, price: 649.5, fragile: true },
  { nameObject: "Caderno", quantity: 4, price: 27.1, fragile: false },
  { nameObject: "Lapis", quantity: 3, price: 5.82, fragile: false },
  { nameObject: "Tesoura", quantity: 1, price: 19.2, fragile: true },
];

//1 - Fragil: true
const getFragil = cart.filter((object) => object.fragile);
console.log(getFragil);
//2 - quantidade * preco = total
const finalPrice = cart.map((object) => object.quantity * object.price);
console.log(finalPrice);
//3 - Media dos valores total (dentro da funcao)  - Tive dificuldade de fazer
const media = cart
  .filter((object) => object.fragile)
  .map((object) => object.quantity * object.price)
  .reduce(
    (acc, cur) => {
      const newQuantity = acc.quantity + 1;
      const newTotal = acc.total + cur;
      return {
        quantity: newQuantity,
        total: newTotal,
        media: newTotal / newQuantity,
      };
    },
    { quantity: 0, total: 0, media: 0 }
  );
console.log(media);
