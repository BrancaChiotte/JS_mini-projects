// Repeat a String

// Challenge
  // write a function that takes two arguments, a string and a number.
  // The function should return a single string that contains the original string,
  // repeated the number of times specified by the second argument,
  // or an empty string if the number is negative.

// Examples
  // 'car', 4 -> 'carcarcarcar'
  // 'bar', 3 -> 'barbarbar'

// Approach 1 - for loop

// Tools
  // for loop
    // http://bit.ly/for-loop-javascript
  // arithmetic operators
    // http://bit.ly/arithmetic-operators-js

function repeatString(str, num) {
  // Step 1 -> Declare variable `finalString` and set it to an empty string
  var finalString = '';
  // Step 2 -> If statement conditional to check if number is `0` or less
  if (num <= 0) {
    // Step 3 -> In the code block return `finalStr`
    return finalStr;
}
  // Step 4 -> Create a for loop that runs `num` times.
  // In code block add `str` to `finalString` for each number we iterate through
  for (var i = 1; i <= num; i++) {
    finalString += str;
    console.log("value of finalString at loop", i + " " + finalString);
  }
  // Step 5 -> Return `finalString`
  return finalString;
}

// tests
console.log(repeatString('car', 4));
console.log(repeatString('bar', 3));
