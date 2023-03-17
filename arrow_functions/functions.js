//Atividades;

// 1;

function doubleANumber(number) {
  return number * 2;
}

// 2;

function createFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// 3;

function calculateTheLenghtOfAString(str) {
  console.log(`o tamanho de "${str}" é:`, str.length);
}

let longestCityNameInTheWorld =
  "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

calculateTheLenghtOfAString(longestCityNameInTheWorld);

// 4;

function calculateTheLenghtOfAString(str) {
  let length = str.length;
  console.log(`o tamanho de "${str}" é:`, length);
  return str.length;
}

calculateTheLenghtOfAString("willynilly");

// 5;

let alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];

function showRandomAlert(name) {
  alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
}

showAlert("Maria");

// 6;

function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

// 7;

const userObject = {
  name: "John",
  surname: "Doe",
  age: 40,
  location: {
    latitude: 43,
    longitude: 12,
  },
};

function displayUser(user) {
  return user.name + " " + user.surname + " (" + user.age + ")";
}

const output = displayUser(userObject);
