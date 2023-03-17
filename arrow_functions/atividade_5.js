let alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];

const showRandomAlert = (name) => {
  alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
};

showRandomAlert("Maria");
