// An array might have many values. These are ordererd in a specific way.
// However, it's possible to display them in other order.
// Given a multi-dimensional array of integers, your goal is to find how many ways you can arrange that same array,
// so that the values are in a different sequence.
// i.g.
// findCombos([1, 2, 3]); 
// 6 -> [1, 2, 3], [1, 3, 2], 
//      [2, 1, 3], [2, 3, 1],
//      [3, 1, 2], [3, 2, 1]

// findCombos([1,2,2]);
// 3 -> [1, 2, 2], [2, 1, 2]
//      [2, 2, 1]

// findCombos([2,2,2,2]);
// 1 -> [2, 2, 2, 2]

// However, an array might contain another array containing other values.
// You still have to find the number of possible sequences for these.
// Multi-dimensional arrays
// i.g.
// findCombos([[1, 2]]);
// 2 -> [[1, 2]], [[2, 1]]     

// findCombos([[1, 2], [3]]); 
// 6 -> [[1, 2], [3]], [[1, 3], [2]], 
//      [[2, 1], [3]], [[2, 3], [1]],
//      [[3, 1], [2]], [[3, 2], [1]]

// Arrays might be empty. These should be ignored and don't belong to any sequence.
// i.g.
// findCombos([1, 2, []]); 
// 2 -> [1, 2], [2, 1] 

// findCombos([[], [2, 2], [3]]);
// 3 -> [2, 2, 3], [3, 2, 2]
//      [2, 3, 2]

// The number of nested arrays don't influence the result. The number of sequences only depends on the integers.
// i.g.
// findCombos([1, 2, 3]) == findCombos([[1, 2], [3]]);  // true
// findCombos([2, 3])    == findCombos([[1, 2], [3]]);  // false
// var c1 = findCombos([[[[4]], 5]]); // 2 -> [4, 5], [5, 4]
// var c2 = findCombos([1, [2]]);     // 2 -> [1, 2], [2, 1]
// c2 == c1; // true

// The array might have nested arrays of any length.
// If the array contains less than two values (or just has empty arrays) return 1.

// [my solution]
function _findCombos(array) {
  const flattenArray = JSON.stringify(array).replace(/(\[)|(\])/g, '').split(',').filter(i => i !== '');
  if (flattenArray.length <= 1) {
    return 1;
  }

  let numberObj = {};
  for (let num of flattenArray) {
    if (numberObj[num]) {
      numberObj[num]++;
    } else {
      numberObj[num] = 1;
    }
  }

  const objectToArray = Object.values(numberObj);
  let length = objectToArray.reduce((accu, num) => accu + num, 0);
  let molecular = 1;
  const denominator = objectToArray
    .filter((num) => num !== 1)
    .map((num) => {
      let newNum = 1;
      while (num > 0) {
        newNum = newNum * num;
        num--;
      };
      return newNum;
    })
    .reduce((accu, num) => accu * num, 1);

  while (length > 0) {
    molecular = molecular * length;
    length--;
  }

  return molecular / denominator;
};

// [best solution]
const deep = require('lodash/flattenDeep')
const fact = n => n < 3 ? n : n * fact(n - 1)

function findCombos(array) {
  var arr = deep(array), o = arr.reduce((h, c) => (h[c] = h[c] + 1 || 1, h), {});
  return Object.keys(o).reduce((r, k) => r / fact(o[k]), fact(arr.length)) || 1;
}