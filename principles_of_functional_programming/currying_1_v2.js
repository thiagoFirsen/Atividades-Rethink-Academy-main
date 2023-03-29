//Varias validaçoes - Sem currying
function textWithSizeBetween(min, max, erro, text) {
  const length = (text || "").trim().length;
  if (length < min || length > max) {
    throw erro;
  }
  console.log(length);
}

const p1 = { firstName: "A", price: 14.99, discount: 0.25 };

textWithSizeBetween(0, 255, "Nome invalido", p1.firstName);

//Varias validacoes - Com currying
function textWithSizeBetween2(min) {
  return function (max) {
    return function (erro) {
      return function (text) {
        //Lazy evaluation
        const length = (text || "").trim().length;
        if (length < min || length > max) {
          throw erro;
        }
        console.log(length);
      };
    };
  };
}

//Reusar- Beneficio - Versos parciais
const forceDefaultSize = textWithSizeBetween2(4)(255);
const forceValidProductName = forceDefaultSize("Nome invalido");
forceValidProductName(p1.firstName);
