const letters = [[["O"], "L", "A"], [" "], ["M", "U", "N", "D", "O"]];
const lettersFlat = letters.flat().flat();
const result = lettersFlat.flatMap((l) => [l, ","]).reduce((a, b) => a + b);
console.log(result);
//FLATMAP

function safeType(value) {
  return {
    value,
    invalid() {
      return (this.value === null) | (this.value === undefined);
    },
    map(fn) {
      if (this.invalid()) {
        return safeType(null);
      } else {
        const newValue = fn(this.value);
        return safeType(newValue);
      }
    },
    flatMap(fn) {
      return this.map(fn).value;
    },
  };
}
const original = "Esse é um texto";
const result2 = safeType(original)
  .map((t) => t.toUpperCase())
  //   .map((t) => (t = null))
  .map((t) => `${t}!!!`)
  .flatMap((t) => t.split("").join(" "));
console.log(original, result2);
