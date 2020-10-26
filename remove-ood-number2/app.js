// Remove Odd Numbers From an Array

// Challenge
  // Create a function that takes an array of numbers and returns only the even values.
  // The function should return an array containing only even numbers

// Examples
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [2, 3, 4, 6, 8, 10]
  // [21, 26, 28, 29] -> [26, 28]

// Approach 1 - // filter method

// Tools
  // filter method
    // http://bit.ly/array-filter-method
  // remainder/modulus operator
    // http://bit.ly/remainder-operator


function evensOnly(arr) {
  // Step 1 -> Use the filter method for each item in the array
  return arr.filter(function(numb) {
    // use modulus operator to evaluate even numbers and `return` the items that
    // that have a remainder of `0`
    return (numb % 2 === 0);
  })
}

console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evensOnly([21, 26, 28, 29]));
