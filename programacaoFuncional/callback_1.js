//desafio

const addAtTerminal = (number1, number2) => console.log(number1 + number2);
const subtractAtTerminal = (number1, number2) => console.log(number1 - number2);
const subtract = (number1, number2) => number1 - number2;

const exec = (fn, number1, number2) => fn(number1, number2);
exec(addAtTerminal, 56, 38);
exec(subtractAtTerminal, 182, 27);
const r = exec(subtract, 50, 25);
console.log(r);

// const fn = () => console.log("Exec...");
// setInterval(fn, 1000);
