// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children.
// All are having great fun on the dance floor when suddenly all the lights went out. 
// It's a dark night and no one can see each other. 
// But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".


// [my solution]
function _findChildren(dancingBrigade) {
  console.log(dancingBrigade);
  let startIndex = 0;
  let endIndex = 1;
  let arr = dancingBrigade.split('').sort().map(al => al.charCodeAt());
  while (startIndex < arr.length) {
    for (let i = endIndex; i < arr.length; i++) {
      if (arr[i] >= 97 && arr[i] - 32 === arr[startIndex]) {
        arr.splice(i, 1);
        arr.splice(startIndex, 0, arr[i]);
      }
    }
    startIndex++;
    endIndex++;
  }

  return arr.map(charCode => String.fromCharCode(charCode)).join('');
}

_findChildren('beeeEBb');
_findChildren('uwwWUueEe');
_findChildren('abBA');
_findChildren('CbcBcbaA');



// [best solution]
function findChildren(dancingBrigade) {
  return '';
}