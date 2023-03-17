const { sep } = require("path");
const path = require("path");
const fn = require("./functions.js");
const route = path.join(__dirname, "legendas");
const symbols = [
  "-",
  "?",
  ".",
  ",",
  "''",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
  "♪",
];

//Refatorar sozinho para this

async function exec() {
  const allFiles = await fn.readDirectory(route);
  const allFilesSRT = await fn.elementsEndingIn(".srt", allFiles);
  const allFilesSRTStrings = await fn.readFiles(allFilesSRT);
  const allFilesSRTStringsWithoutSpace = allFilesSRTStrings.join("\n");
  const allFilesSRTStringsSeparatedByLines =
    allFilesSRTStringsWithoutSpace.split("\n");
  const removeEmpties = await fn.removeEmpaty(
    allFilesSRTStringsSeparatedByLines
  );
  const removesUnwantedElements = await fn.removeIfIncluding(
    "-->",
    removeEmpties
  );
  const removeNumbers = await fn.removeIfIncludingNumber(
    removesUnwantedElements
  );
  const stringsWithoutSymbols = await fn.removeSymbols(symbols, removeNumbers);
  const mergeContent = stringsWithoutSymbols.join(" ");
  const separateByWords = mergeContent.split(" ");
  const removeWordsEmpaty = await fn.removeEmpaty(separateByWords);
  const wordsCountWithoutNumber = fn.removeIfIncludingNumber(removeWordsEmpaty);
  const wordsCount = fn.groupWords(wordsCountWithoutNumber);
  const sortWordsCount = fn.sortByNumbers("quantity", wordsCount, "desc");

  console.log(sortWordsCount);
}

exec();
