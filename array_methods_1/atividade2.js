let newArray = [];
const createANewArrayFromTheParameters = (array, length = 0) => {
  if (length > 0) {
    newArray = array.slice(0, length);
  } else if (length === 0) {
    newArray = array[0];
  } else {
    newArray = [];
  }
  return newArray;
};

console.log(createANewArrayFromTheParameters([7, 9, 0, -2], 3));
console.log(createANewArrayFromTheParameters([7, 9, 0, -2]));
console.log(createANewArrayFromTheParameters([], 3));
console.log(createANewArrayFromTheParameters([7, 9, 0, -2], 6));
console.log(createANewArrayFromTheParameters([7, 9, 0, -2], -3));
