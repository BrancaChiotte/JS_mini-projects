// Reverse a String

// Challenge
  // Reverse the provided string.
  // You may need to turn the string into an array before you can reverse it.
  // Your result must be a string.

// Examples
  // 'car' -> 'rac'
  // 'bar' -> 'rab'

// Approach 1 - // Using Built in Functions

// Tools
  // String.prototype.split()
    // http://bit.ly/string-split
  // Array.prototype.reverse()
    // http://bit.ly/array-reverse-method
  // Array.prototype.join()
    // http://bit.ly/array-join

//solution 1

// function revString(str) {
//   // step 1 -> split string into an array and assign to variable `arrayToString`
//   var arrayToString = str.split('');

//   // step 2 -> reverse array and assign to variable `reverseArray`
//   var reverseArray = arrayToString.reverse();

//   // step 3 -> join array into string and assignt to variable `reverseString`
//   var reverseString = arrayToString.join('');

//   // step 4 -> return `reverseString`
//   return reverseString;
// }


//solution 2 - cleaner!!
// alternative -> complete all these steps in one line of code

function revString(str) {
  return str.split('').reverse().join('');
}


console.log(revString('car'));
console.log(revString('bar'));
