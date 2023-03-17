function generateNumbersBetween(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = parseInt(Math.random() * (max - min + 1) + min);
      resolve(random);
    }, tempo);
  });
}

function generateLotsOfNumbers() {
  return Promise.all([
    generateNumbersBetween(1, 60, 4000),
    generateNumbersBetween(1, 60, 1000),
    generateNumbersBetween(1, 60, 500),
    generateNumbersBetween(1, 60, 3000),
    generateNumbersBetween(1, 60, 100),
    generateNumbersBetween(1, 60, 1500),
  ]);
}
console.time("Promise");
generateLotsOfNumbers()
  .then(console.log)
  .then(() => {
    console.timeEnd("Promise");
  });
