const person = {
  firstName: "Maria",
  heigth: 1.76,
  city: "Sao Paulo",
  end: { street: "ABC" },
};

//Atribuiçao por referencia - Se mudar em um muda no outra

const newPerson = person;

//Funcao pura - Copia rasa
function changePerson(person) {
  const newPerson = { ...person };
  newPerson.firstName = "Joao";
  newPerson.city = "Fortaleza";
  newPerson.end.street = "ABD";
  return newPerson;
}

console.log(changePerson(person));
console.log(person);
