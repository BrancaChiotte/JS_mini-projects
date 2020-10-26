// Create a function that takes an array of non-negative numbers and strings and returns a new array without the strings.
// Rules
  // Filter out all strings.
  // Return only numbers.
  // Example
    // [1, 2, "a", "b"] ➞ [1, 2]
    // [1, "a", "b", 0, 15] ➞ [1, 0, 15]
    // [1, 2, "aasf", "1", "123", 123] ➞ [1, 2, 123]
    // Notes

 // solution 1
// function filterArray(arr) {
//   var onlyNumber = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       onlyNumber.push(arr[i]);
//     }
//   }
//   return onlyNumber;
// }

 // solution 2
// function filterArray(arr) {
//   var onlyNumber = arr.filter(function (item) {
//     return typeof item === "number";
//   });
//   return onlyNumber;
// }

 // solution 3 - es6
function filterArray(arr) {
  return arr.filter( item => typeof item === "number");
}

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
