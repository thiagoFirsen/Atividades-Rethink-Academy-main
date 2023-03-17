const waitingFor = (time = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve();
    }, time);
  });
};

async function exec() {
  await waitingFor(2000);
  await waitingFor(2000);
  await waitingFor(2000);
}

exec();
