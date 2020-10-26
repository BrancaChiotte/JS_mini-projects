// Name Swap

// Challenge
  // Reverse the order of two provided strings.

// Examples
  // "Abraham Lincoln" -> "Lincoln Abraham"
  // "Hank Aaron" -> "Aaron Hank"

// Approach 1 - // Using Built in Functions

// Tools
  // String.prototype.split()
    // http://bit.ly/string-split
  // Array.prototype.reverse()
    // http://bit.ly/array-reverse-method
  // Array.prototype.join()
    // http://bit.ly/array-join

function nameSwap(str) {
  // step 1 -  split string into an array
  var stringToArray = str.split(' ');
  // step 2 -  Reverse array
  var reverseArray = stringToArray.reverse();
  // step 3 -  join array into string
  var reverseString = reverseArray.join(' ');
  // step 4 -  return string
  return reverseString;
  // alternative -> complete all these steps in one line of code
    // return str.split(' ').reverse().join(' ');
}


console.log(nameSwap('Abraham Lincoln'));
console.log(nameSwap('Hank Aaron'));
