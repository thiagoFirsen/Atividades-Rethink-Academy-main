const fullName = () => {
  const name = "Thiago Firsen Bernardino";
  const nameFormat = () => {
    const names = name.split(" ");
    console.log(names);
    return names[0] + " " + names[names.length - 1];
  };
  return nameFormat;
};
const myClosure = fullName();
console.log(myClosure());

// module.exports = fullName;

// const names = ["Amanda", "Andre", "Vinicius", "Thiago"];
// console.log(names);
// names.push("Robson");
// console.log(names);

// const names = ["Amanda", "Andre", "Vinicius", "Thiago"];
// console.log(names);
// const copyNames = names.concat("Robson");
// console.log(names, copyNames);

// const sayHello = () => "Hello";

// const sayHelloUser = (fn, user) => {
//   const result = () => console.log(fn() + " " + user);
//   return result;
// };

// const sayHelloUserReturn = () => sayHelloUser(sayHello, "Thiago");

// sayHelloUserReturn()();
