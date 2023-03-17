const firstElement = (arrayOrString) => arrayOrString[2];
const lowerCase = (letter) => letter.toLowerCase();
new Promise((resolve) => resolve(["Ana", "Bia", "Carlos", "Daniel"]))
  .then(firstElement)
  .then(firstElement)
  .then(lowerCase)
  .then(console.log);
