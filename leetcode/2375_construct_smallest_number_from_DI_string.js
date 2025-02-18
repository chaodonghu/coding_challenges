/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  let stack = [];
  let result = "";
  let n = pattern.length;

  // iterate through from 0 to the length of the pattern;
  for (let i = 0; i <= n; i++) {
    // start from 1 and add to our stack
    stack.push(i + 1);

    let char = pattern[i];

    // if we've reached the end of our pattern or the character is increasing
    if (i == n || char === "I") {
      // while our stack is not empty, loop through the stack and add the top number to our result
      while (stack.length > 0) {
        result += stack.pop();
      }
    }

    console.log("stack", stack);

    // if our character is 'D', then just add to our stack and do nothing.
  }

  return result;
};

// Time: O(N)
// Space: O(N) since we store in the stack