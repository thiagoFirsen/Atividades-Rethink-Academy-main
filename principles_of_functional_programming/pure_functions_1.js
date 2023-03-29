//Funçao Impura
const PI = 3.1415;
function circArea(ray) {
  return ray * ray * PI;
}
console.log(circArea(10));

//Funçao Pura
function circAreaPure(ray, pi) {
  return ray * ray * pi;
}
console.log(circAreaPure(10, Math.PI));
