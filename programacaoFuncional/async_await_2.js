// function generateNumbersBetween(min, max) {
//   if (min > max) {
//     [max, min] = [min, max];
//   }
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const random = parseInt(Math.random() * (max - min + 1) + min);
//       resolve(random);
//     }, 2000);
//   });
// }

// async function exec() {
//   const numbersBetween = await generateNumbersBetween(1, 60);
//   const resultNumber = (await numbersBetween) * 10;
//   console.log(`O número gerado foi ${resultNumber}`);
// }
// exec();

function generateNumbersBetween(min, max, bannedNumbers) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = parseInt(Math.random() * (max - min + 1) + min);
      if (bannedNumbers.includes(random)) {
        reject("Número repetido");
      } else {
        resolve(random);
      }
    }, 2000);
  });
}

async function exec() {
  try {
    const numberGenerate = await generateNumbersBetween(1, 5, [1, 2, 4]);
    console.log(numberGenerate);
  } catch (err) {
    console.log(err);
  }
}
exec();
