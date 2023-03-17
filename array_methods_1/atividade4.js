const arrayOfStrings = (array) => array.filter((index) => index.length <= 5);
console.log(
  arrayOfStrings([
    "cachorro",
    "pato",
    "oi",
    "família",
    "comer",
    "camping",
    "aquarela",
  ])
);
