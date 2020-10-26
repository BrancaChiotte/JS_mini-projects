// Repeat a String

// Challenge
  // write a function that takes two arguments, a string and a number.
  // The function should return a single string that contains the original string, repeated the number of times specified by the second argument, or an empty string if the number is negative.

// Examples
  // 'car', 4 -> 'carcarcarcar'
  // 'bar', 3 -> 'barbarbar'

// Approach 1 - while loop

// Tools
  // while loop
    // http://bit.ly/while-loop
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

      // Step 4 -> Set the while loop with `(num > 0)` as the condition to check
      while (num > 0) {
        // Step 5 -> In code block add value of `str` to `finalString`
        finalString += str;
        // Step 6 -> In code block decrement `num`
        num--;
      }

      // Step 5 -> Return `finalString`
      return finalString;
    }

    // tests
    console.log(repeatString('car', 4));
    console.log(repeatString('bar', 3));
