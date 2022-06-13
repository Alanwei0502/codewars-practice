// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
// Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

// [my solution]
function solution1(number) {
  if (typeof number !== 'number' || number <= 0) {
    return 0;
  }

  let sum = 0;
  const quotient3 = (number - number % 3) / 3;
  const quotient5 = (number - number % 5) / 5;

  for (let i = 1; i <= quotient3 && 3 * i < number; i++) {
    sum += 3 * i;
  }

  for (let j = 1; j <= quotient5 && 5 * j < number; j++) {
    sum += (j % 3 > 0) ? (5 * j) : 0;
  }

  return sum;
}

// [best solution]
function solution2(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum;
}