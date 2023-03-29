function composition(...fns) {
  return function (value) {
    return fns.reduce(async (acc, cur) => {
      if (Promise.resolve(acc) === acc) {
        return cur(await acc);
      } else {
        return cur(acc);
      }
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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text.split("").join(" "));
    }, 3000);
  });
}

const exaggerated = composition(shout, emphasize, slowDown);
const aLittleLessExaggerated = composition(shout, emphasize);
exaggerated("para").then(console.log);
exaggerated("Cuidado com o buraco").then(console.log);
aLittleLessExaggerated("Cuidado").then(console.log);
