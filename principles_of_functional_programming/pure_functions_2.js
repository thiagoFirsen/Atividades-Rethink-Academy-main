//Funçao Pura ou Impura ? --> Impura
function generateRandomNumber(min, max) {
  const factor = max - min + 1;
  return parseInt(Math.random() * factor) + min;
}

console.log(generateRandomNumber(5, 1000));
console.log(generateRandomNumber(5, 1000));
console.log(generateRandomNumber(5, 1000));
console.log(generateRandomNumber(5, 1000));
