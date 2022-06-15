// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"  ==> "elbuod  secaps"

// [my solution]
function _reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// [best solution]
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}