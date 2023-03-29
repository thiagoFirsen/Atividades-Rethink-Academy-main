const nums = [1, 2, 3, 4, 5, 6];
const newsnums = nums.map((el) => el + 10).map((el) => el * 2);

// console.log(nums, newsnums);

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
  };
}
const original = "Esse é um texto";
const result = safeType(original)
  .map((t) => t.toUpperCase())
  //   .map((t) => (t = null))
  .map((t) => `${t}!!!`)
  .map((t) => t.split("").join(" "));
console.log(original, result.value);
