const fs = require("fs");
const path = require("path");

const route = path.join(__dirname, "dados.txt");

console.log(route);

function displayContent(_, content) {
  console.log(content.toString());
}
console.log("Inicio");

fs.readFile(route, displayContent);
console.log("Fim");
console.log("Inicio");
console.log(fs.readFileSync(route).toString());
console.log("Fim");
