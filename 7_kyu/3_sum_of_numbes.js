// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.
// e.g.
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// [my solution]
function getSum(a, b) {
  return a === b
    ? a
    : (a + b) * (Math.abs(b - a) + 1) / 2;
}

// [best solution]
const GetSum = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}