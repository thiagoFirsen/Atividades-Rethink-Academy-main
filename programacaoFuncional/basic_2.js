function sayGoodMorning() {
  console.log("Bom dia");
}

const sayGoodAfternoon = function () {
  console.log("Boa tarde");
};

//Passando função como parametro para outra função
function doAnything(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

doAnything(3);
doAnything(sayGoodAfternoon);
doAnything(sayGoodMorning);

//Retornar uma função a partir de outra função

function makePower(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const powerOf2 = makePower(2);
console.log(powerOf2(8));

console.log(makePower(3)(4));

const resulPower34 = makePower(3)(4);
console.log(resulPower34);
