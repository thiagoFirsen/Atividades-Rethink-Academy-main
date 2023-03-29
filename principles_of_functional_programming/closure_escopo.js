const x = 3;

function out() {
  const x = 97;
  function addUpTo3() {
    return x + 3;
  }
  return addUpTo3();
}

console.log(out());
module.exports = out;
