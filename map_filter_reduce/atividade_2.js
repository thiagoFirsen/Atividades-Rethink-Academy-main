const stringConcat = (arr) =>
  arr.reduce((acc, cur) => acc + cur.toString(), "");

console.log(stringConcat([1, 2, 3]));
