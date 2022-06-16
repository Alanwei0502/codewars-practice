// In this Kata, you will sort elements in an array by decreasing frequency of elements.
// If two elements have the same frequency, sort them by increasing value.
// e.g.
// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]

// [my solution]
function _solve(arr) {
  const counter = {};

  arr.forEach(num => {
    if (counter[num]) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  });

  let sortArray = [];

  Object.entries(counter)
    .sort((arr1, arr2) => arr2[1] === arr1[1] ? arr1[0] - arr2[0] : arr2[1] - arr1[1])
    .forEach(arr => {
      const currentArray = new Array(arr[1]).fill(Number(arr[0]));
      sortArray = [...sortArray, ...currentArray];
    });

  return sortArray;
}

// [best solution]
function solve(arr) {
  const r = {}
  for (let n of arr) r[n] = r[n] + 1 || 1
  return arr.slice().sort((a, b) => r[b] - r[a] || a - b)
}