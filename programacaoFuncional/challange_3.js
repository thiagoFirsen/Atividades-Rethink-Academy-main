const fs = require("fs");
const path = require("path");

const route = path.join(__dirname, "dados.txt");

const readFile = (route) => {
  return new Promise((resolve) => {
    fs.readFile(route, (_, content) => {
      resolve(content.toString());
    });
  });
};

readFile(route)
  .then((content) => content.split("\n"))
  .then((row) => row.join(","))
  .then((content) => `O conteudo do arquivo é: ${content}`)
  .then(console.log);
