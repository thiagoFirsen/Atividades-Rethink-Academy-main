// setTimeout(() => {
//   console.log("Executando Callback...");
//   setTimeout(() => {
//     console.log("Executando Callback...");
//   }, 2000);
// }, 2000);

const waitingFor = (time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve();
    }, time);
  });
};
waitingFor(3000).then(waitingFor).then(waitingFor);
