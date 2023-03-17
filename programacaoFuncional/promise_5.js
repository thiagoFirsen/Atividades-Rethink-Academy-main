function toWorkOrNot(value, chanceOfErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceOfErro) {
      reject("Ocorreu um erro");
    } else {
      resolve(value);
    }
  });
}

toWorkOrNot("Testando", 1)
  .then(console.log)
  .catch((err) => console.log(err));
