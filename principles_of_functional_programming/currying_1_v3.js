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

const p1 = { firstName: "A", price: 14.99, discount: 0.25 };

//Reusar- Beneficio - Versos parciais
const forceDefaultSize = textWithSizeBetween2(4)(255);
const forceValidProductName = forceDefaultSize("Nome invalido");

//Aplicar validaçao - Sem currying
function applyValidation(fn, value) {
  try {
    fn(value);
  } catch (e) {
    return { error: e };
  }
}
// console.log(applyValidation(forceValidProductName, p1.firstName));

//Aplicar validaçao - Coom currying

function applyValidation2(fn) {
  return function (value) {
    try {
      fn(value);
    } catch (e) {
      return { error: e };
    }
  };
}

const validateNameProduct = applyValidation2(forceValidProductName);
console.log(validateNameProduct(p1.firstName));
