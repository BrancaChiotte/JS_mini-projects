// Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.

  // Examples
  // "John Smith" ➞ "Smith John"
  // "Albert Einstein" ➞ "Einstein Albert"

//solution 1
// function nameShuffle(str) {
//   var backwardName = [];
//   str = str.split(' ');
//   backwardName.push(str[1]);
//   backwardName.push(str[2]);
//   return backwardName
// }

//solution 1 - cleaner
// function nameShuffle(str) {
//   var backwardName = [];
//   str = str.split(' ');
//   backwardName.push(str[1], str[0]);
//   return backwardName
// }

// solution 2 -
// function nameShuffle(str) {
//   str = str.split(' ');
//   var backwardName = [];
//   for (var i = 1; i >= 0; i--) {
//     backwardName.push(str[i]);
//   }
//   return backwardName.join(' ');
// }


//solution 3 - cleanerrr!
function nameShuffle(str) {
  return str.split(' ').reverse().join(' ');
}


console.log(nameShuffle("John Smith"));
console.log(nameShuffle("Albert Einstein"));

