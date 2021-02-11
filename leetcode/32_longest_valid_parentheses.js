// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
//
//
//
// Example 1:
//
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:
//
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:
//
// Input: s = ""
// Output: 0

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let open = 0;
  let close = 0;
  let maxLength = 0;

  for (char of s) {
    if (char === "(") {
      open++;
    } else {
      close++;
    }

    if (open === close) {
      maxLength = Math.max(maxLength, open + close);
    } else if (close > open) {
      open = 0;
      close = 0;
    }
  }

  open = 0;
  close = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") {
      open++;
    } else {
      close++;
    }

    if (open === close) {
      maxLength = Math.max(maxLength, open + close);
    } else if (open > close) {
      open = 0;
      close = 0;
    }
  }

  return maxLength;
};
