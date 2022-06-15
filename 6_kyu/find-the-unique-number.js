// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// e.g.
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// [my solution]
function findUniq(arr) {
  let counter = {};
  for (let num of arr) {
    if (counter[num]) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  }

  for (let key in counter) {
    if (counter[key] === 1) {
      return +key;
    }
  }
}

// [best solution]
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
