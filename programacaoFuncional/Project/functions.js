const { rejects } = require("assert");
const fs = require("fs");
const { describe } = require("node:test");
const path = require("path");

function readDirectory(route) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(route);
      const filesComplet = files.map((file) => path.join(route, file));
      resolve(filesComplet);
    } catch (e) {
      reject(e);
    }
  });
}

function elementsEndingIn(defaut, array) {
  return array.filter((el) => el.endsWith(defaut));
}

function readFiles(routes) {
  return Promise.all(routes.map((route) => readFile(route)));
}

function readFile(route) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(route, { encoding: "utf-8" });
      resolve(content.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function removeEmpaty(array) {
  return array.filter((element) => element.trim());
}

function removeIfIncluding(defaut, array) {
  return array.filter((element) => !element.includes(defaut));
}

function removeIfIncludingNumber(array) {
  return array.filter((element) => {
    const number = parseInt(element.trim());
    return number !== number; // NaN === NaN --> False
  });
}

function removeSymbols(symbols, array) {
  return array.map((element) => {
    return symbols.reduce((acc, cur) => {
      return acc.split(cur).join("");
    }, element);
  });
}

function groupWords(array) {
  return Object.values(
    array.reduce((acc, cur) => {
      const p = cur.toLowerCase();
      const quantity = acc[p] ? acc[p].quantity + 1 : 1;
      acc[p] = {
        palavra: p,
        quantity,
      };
      return acc;
    }, {})
  );
}

function sortByNumbers(atribuct, array, ordem = "up") {
  const upward = (o1, o2) => o1[atribuct] - o2[atribuct];
  const decreasing = (o1, o2) => o2[atribuct] - o1[atribuct];

  return array.sort(ordem === "up" ? upward : decreasing);
}

module.exports = {
  readDirectory,
  elementsEndingIn,
  readFile,
  readFiles,
  removeEmpaty,
  removeIfIncluding,
  removeIfIncludingNumber,
  removeSymbols,
  groupWords,
  sortByNumbers,
};
