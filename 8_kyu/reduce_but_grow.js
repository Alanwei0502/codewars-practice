// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// i.g. [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// [my solution]
function _grow(x) {
  if (x.length === 0) {
    return 0;
  }

  let final = 1;
  for (const num of x) {
    final = final * num;
  }

  return final;
}

// [best solution]
// reduce方法，若沒有提供初始值，則原陣列的第一個元素將會被當作初始的累加器。
const grow = x => x.reduce((final, num) => final * num);