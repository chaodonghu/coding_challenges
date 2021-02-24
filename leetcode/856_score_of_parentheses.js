/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
  let stack = [0];

  for (char of S) {
    if (char === "(") {
      stack.push(0);
    } else {
      // pop the last value off
      let previousDepth = stack.pop();
      // get the previous depth
      let currentDepth = stack.pop();
      // replace the previous depth index with the addition of the previous plus the max of either 1, or the value * 2 (if it is within a brackets)
      stack.push(currentDepth + Math.max(2 * previousDepth, 1));
    }
  }

  // return the last value on the stack which is the cumulative depth
  return stack.pop();
};

// Eg.
// "(()(()))"
// [0, 0]
// [0, 0, 0]
// [0, 1]
// [0, 1, 0]
// [0, 1, 0, 0]
// [0, 1, 1]
// [0, 3]
// [6]

// Time Complexity: O(N), N is the length of S
// Space Complexity: O(N)
