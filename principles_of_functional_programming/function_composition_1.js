function composition(...fns) {
  return function (value) {
    return fns.reduce((acc, cur) => {
      return cur(acc);
    }, value);
  };
}

function shout(text) {
  return text.toUpperCase();
}

function emphasize(text) {
  return `${text}!!!!`;
}

function slowDown(text) {
  return text.split("").join(" ");
}

const exaggerated = composition(shout, emphasize, slowDown);
const aLittleLessExaggerated = composition(shout, emphasize);
const result = exaggerated("para");
const result1 = exaggerated("Cuidado com o buraco");
const result2 = aLittleLessExaggerated("Cuidado");
console.log(result);
console.log(result1);
console.log(result2);
