const nums = [4, 8, 3, 2, 9, 1, 9, 3];

// #1 - Dados Mutaveis - For

let total = 0;
for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}

console.log(total);

// #2 - Dados Imutaveis - Reduce

const total2 = nums.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(total2);

// #3 - Dados Imutaveis - Recursividade

function addArray(array, total = 0) {
  if (array.length === 0) {
    return total;
  }
  return addArray(array.slice(1), total + array[0]);
}

console.log(addArray(nums));
