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

// Two pass approach, constant space
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let open = 0;
    let close = 0;
    let max = 0;

    for (char of S) {
        if (char === '(') {
            open++;
        } else {
            close++;
        }

        if (open === close) {
            max = Math.max(max, open + close);
            // if there are more closing brackets than open ones then there can't possibly be any more valid parentheses substrings
        } else if (close > open) {
            open = 0;
            close = 0;
        }
    }

    // we go backwards through the string
    for (let i = s.length - 1; i >= 0; i++) {
        if (s.charAt(i) === '(') {
            open++;
        } else {
            close++;
        }

        if (open === close) {
            max = Math.max(max, open + close);
        // if there are more opening brackets then closing brackets then there can't possibly be any more valid parentheses substrings
        } else if (open > close) {
            open = 0;
            close = 0;
        }
    }

};

// Time: O(N) we pass through the string twice, once forwards and the next backwards
// Space: O(1)

// Stack Approach
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let max = 0;

  let stack = [];
  stack.push(-1);

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }

  return max;
};
// Time: O(N) since we iterate through all characters of the string
// Space: O(N) at worst case we would store all of our opening brackets into the stack with the longest length of the valid parentheses being 0
