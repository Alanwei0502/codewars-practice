// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']

// [my solution]
function solution(str) {
  let newStr = str;
  let arr = [];

  if (str.length % 2) {
    newStr += '_';
  }

  for (let i = 0; i < newStr.length; i = i + 2) {
    arr.push(newStr.slice(i, i + 2));
  }

  return arr;
}

console.log(solution('abcde'));

// [best solution]
function _solution(s) {
  return (s + "_").match(/.{2}/g) || []
}