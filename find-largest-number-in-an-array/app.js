// Create a function that takes an array of numbers. Return the largest number in the array.
// Examples
  // [4, 5, 1, 3] ➞ 5
  // [300, 200, 600, 150] ➞ 600
  // [1000, 1001, 857, 1] ➞ 1001
  // Notes
  // Expect either a positive integer or zero. Don't worry about negative integers.

 // solution 1 - for loop
// function findLargestNum(arr) {
//   var biggestNum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > biggestNum) {
//       biggestNum = arr[i];
//     }
//   }
//   return biggestNum;
// }

 // solution 2
// function findLargestNum(arr) {
//   var biggestNum = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > biggestNum) {
//       biggestNum = arr[i];
//     }
//   }
//   return biggestNum;
// }

  // solution 3  - math.max + spread operator
function findLargestNum(arr) {
  return Math.max(...arr);
}


console.log(findLargestNum([4, 5, 1, 3]));
console.log(findLargestNum([300, 200, 600, 150]));
console.log(findLargestNum([1000, 1001, 857, 1]));
