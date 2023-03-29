//Funcao impura e mutavel
const nums = [3, 1, 7, 9, 4, 6];
function order(array) {
  return array.sort();
}
console.log(order(nums));

// Funçao pura e imutavel
const nums2 = [3, 1, 7, 9, 4, 6];
function order2(array) {
  return [...array].sort();
}
const orderedNumbers = order2(nums2);
console.log(nums2, orderedNumbers);

//Dado imutavel

const nums3 = Object.freeze([3, 1, 7, 9, 4, 6]);
nums3[0] = 100;
console.log(nums3);

//

const partOfNumbers = nums.slice(2);
console.log(nums, partOfNumbers);
