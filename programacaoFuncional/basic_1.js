//Function Declaration
function sayGoodMorning() {
  console.log("Bom dia");
}

sayGoodMorning();

//Function Expression

const goodAfternoon = function () {
  console.log("Boa tarde");
};

goodAfternoon();

//

function add(a, b = 0) {
  return a + b;
}

let result = add(3, 4);
console.log(result);

result = add(3, 5, 5, 6, 7, 8);
console.log(result);

result = add(3);
console.log(result);
