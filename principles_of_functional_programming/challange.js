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
//Perdi o arquivo do projeto 1 porque apaguei tudo da minha pasta sem querer e nao consegui recuperar - Depois irei tentar

fn.composition(
  fn.lerDiretorio,
  fn.elementosTerminadosCom(".str"),
  ...composition,
  console.log
)(route);
